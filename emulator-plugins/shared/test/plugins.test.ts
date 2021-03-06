import * as Helpers from '@secret-agent/testing/helpers';
import navigatorJson from '@secret-agent/emulate-chrome-80/navigator.json';
import { inspect } from 'util';
import ChromeCore from '@secret-agent/core/lib/ChromeCore';
import Core from '@secret-agent/core';
import Emulators from '@secret-agent/emulators';
import chrome80Dom from './chrome80DomProperties.json';
import inspectScript from './inspectHierarchy';
import getOverrideScript from '../injected-scripts';

const { navigator } = navigatorJson;

let chromeCore: ChromeCore;
beforeAll(async () => {
  const emulator = Emulators.create(Core.defaultEmulatorId);
  chromeCore = new ChromeCore(emulator.engineExecutablePath);
  Helpers.onClose(() => chromeCore.close(), true);
  chromeCore.start();
});

afterAll(Helpers.afterAll);
afterEach(Helpers.afterEach);

const debug = process.env.DEBUG || false;

test('it should override plugins in a browser window', async () => {
  const httpServer = await Helpers.runHttpServer();

  const context = await chromeCore.createContext();
  Helpers.onClose(() => context.close());
  const page = await context.newPage();

  page.on('error', console.log);
  page.on('pageerror', console.log);
  if (debug) {
    page.on('console', log => console.log(log.text()));
  }

  await page.evaluateOnNewDocument(
    getOverrideScript('plugins', {
      mimeTypes: [
        {
          type: 'application/pdf',
          suffixes: 'pdf',
          description: '',
          __pluginName: 'Chrome PDF Viewer',
        },
        {
          type: 'application/x-google-chrome-pdf',
          suffixes: 'pdf',
          description: 'Portable Document Format',
          __pluginName: 'Chrome PDF Plugin',
        },
        {
          type: 'application/x-nacl',
          suffixes: '',
          description: 'Native Client Executable',
          __pluginName: 'Native Client',
        },
        {
          type: 'application/x-pnacl',
          suffixes: '',
          description: 'Portable Native Client Executable',
          __pluginName: 'Native Client',
        },
      ],
      plugins: [
        {
          name: 'Chrome PDF Plugin',
          filename: 'internal-pdf-viewer',
          description: 'Portable Document Format',
        },
        {
          name: 'Chrome PDF Viewer',
          filename: 'mhjfbmdgcfjbbpaeojofohoefgiehjai',
          description: '',
        },
        {
          name: 'Native Client',
          filename: 'internal-nacl-plugin',
          description: '',
        },
      ],
    }).script,
  );
  await page.goto(httpServer.url);
  const hasPlugins = await page.evaluate(() => {
    return 'plugins' in navigator && 'mimeTypes' in navigator;
  });
  expect(hasPlugins).toBe(true);

  const pluginCount = await page.evaluate(() => {
    return navigator.plugins.length;
  });
  expect(pluginCount).toBe(3);

  const mimecount = await page.evaluate(() => {
    return navigator.mimeTypes.length;
  });
  expect(mimecount).toBe(4);

  const structure = JSON.parse(
    (await page.evaluate(`(${inspectScript.toString()})(window, 'window')`)) as any,
  ).window;
  for (const proto of ['Plugin', 'PluginArray', 'MimeType', 'MimeTypeArray']) {
    if (debug) console.log(inspect(structure[proto], false, null, true));
    expect(structure[proto]).toStrictEqual(chrome80Dom[proto]);
  }
  const navigatorStructure = structure.navigator;
  if (debug) console.log(inspect(navigatorStructure.mimeTypes, false, null, true));
  expect(navigatorStructure.mimeTypes).toStrictEqual(navigator.mimeTypes);

  if (debug) console.log(inspect(navigatorStructure.plugins, false, null, true));
  expect(navigatorStructure.plugins).toStrictEqual(navigator.plugins);
}, 60e3);
