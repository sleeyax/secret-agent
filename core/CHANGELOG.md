# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-alpha.11](https://github.com/ulixee/secret-agent/compare/v1.0.0-alpha.10...v1.0.0-alpha.11) (2020-08-25)

**Note:** Version bump only for package @secret-agent/core





# [1.0.0-alpha.10](https://github.com/ulixee/secret-agent/compare/v1.0.0-alpha.9...v1.0.0-alpha.10) (2020-08-25)


### Bug Fixes

* dependency/path issues ([17a6813](https://github.com/ulixee/secret-agent/commit/17a681335a3cd28cf7a668f5efd58229fa1cc59e))





# [1.0.0-alpha.9](https://github.com/ulixee/secret-agent/compare/v1.0.0-alpha.8...v1.0.0-alpha.9) (2020-08-25)


### Bug Fixes

* **replay:** fix rendering doctype + svg ([ac36c79](https://github.com/ulixee/secret-agent/commit/ac36c791c9d3611874900c65e8180b7daa1ed232))


### Features

* **ci:** windows tests ([fd5e9db](https://github.com/ulixee/secret-agent/commit/fd5e9dbd2bdd1ac4fcba94f46e8cba4eb2ce7319))
* **core:** enhance logs ([a5b6d58](https://github.com/ulixee/secret-agent/commit/a5b6d58a7fbf74415d7094b374f040ab1ca2890a))
* **emulators:** enable multi-engine support ([1e008c9](https://github.com/ulixee/secret-agent/commit/1e008c9fe26c977ebf85c665d0891023342a58b5))
* **mitm:** support push streams ([1b2af06](https://github.com/ulixee/secret-agent/commit/1b2af0655445929ac1f4fb8dcac011b9623a75d4))
* **replay:** stream data and simplify tick tracker ([91c350c](https://github.com/ulixee/secret-agent/commit/91c350cdbf9f99c19754fbb5598afe62a13fb497))





# [1.0.0-alpha.8](https://github.com/ulixee/secret-agent/compare/v1.0.0-alpha.6...v1.0.0-alpha.8) (2020-08-05)


### Bug Fixes

* **core:** core should autoclose if not started ([8d46a77](https://github.com/ulixee/secret-agent/commit/8d46a775573733aa53cef1723fb71d60485fae9f)), closes [#41](https://github.com/ulixee/secret-agent/issues/41)
* **socket:** http2 requests not reusing sockets ([3cbf853](https://github.com/ulixee/secret-agent/commit/3cbf8531589536c763525086cfea407c3435ca9b))
* use os tmp directory ([e1f5a2b](https://github.com/ulixee/secret-agent/commit/e1f5a2b7e63470b626ed906170b5c0337f5e0c43))
* windows tests ([c2943e8](https://github.com/ulixee/secret-agent/commit/c2943e844d53c11f829baed60c449604e81544c8))


### Features

* **mitm:** record blocked and cached http ([bd47738](https://github.com/ulixee/secret-agent/commit/bd47738e010c962e529a048d4ee33211d67a6d8f))
* **replay:** split app/replay in electron backend ([3b66eec](https://github.com/ulixee/secret-agent/commit/3b66eec372900e764872857b67f80817f4ba2b9e))
* **session-state:** capture requests before send ([9607793](https://github.com/ulixee/secret-agent/commit/960779370fa439d1c173e855bb8bdf907de9abc6))





# [1.0.0-alpha.7](https://github.com/ulixee/secret-agent/compare/v1.0.0-alpha.6...v1.0.0-alpha.7) (2020-07-27)


### Bug Fixes

* use os tmp directory ([e1f5a2b](https://github.com/ulixee/secret-agent/commit/e1f5a2b7e63470b626ed906170b5c0337f5e0c43))
* windows tests ([c2943e8](https://github.com/ulixee/secret-agent/commit/c2943e844d53c11f829baed60c449604e81544c8))





# [1.0.0-alpha.6](https://github.com/ulixee/secret-agent/compare/v1.0.0-alpha.5...v1.0.0-alpha.6) (2020-07-22)

**Note:** Version bump only for package @secret-agent/core





# [1.0.0-alpha.5](https://github.com/ulixee/secret-agent/compare/v1.0.0-alpha.4...v1.0.0-alpha.5) (2020-07-21)

**Note:** Version bump only for package @secret-agent/core





# [1.0.0-alpha.4](https://github.com/ulixee/secret-agent/compare/v1.0.0-alpha.3...v1.0.0-alpha.4) (2020-07-20)


### Bug Fixes

* **replay:** cover last tick on playbar ([baf12e7](https://github.com/ulixee/secret-agent/commit/baf12e795fade634e60c64a342ea339ac6e8aa5c))
* **replay:** record close date when errors occcur ([2ce94dd](https://github.com/ulixee/secret-agent/commit/2ce94dd694bba172028e8b7b00f0b3e0df0e0163)), closes [#31](https://github.com/ulixee/secret-agent/issues/31)
* change shared package names ([d6181a7](https://github.com/ulixee/secret-agent/commit/d6181a75a0387797177eb9aa2f71553bb7d31432))


### Features

* **replay:** add session logs, detect errors ([f1865c0](https://github.com/ulixee/secret-agent/commit/f1865c0aef38f6722bbcdee0244288f0f6040c5a)), closes [#31](https://github.com/ulixee/secret-agent/issues/31)
* **replay:** show commands in playbar ([58b9f7a](https://github.com/ulixee/secret-agent/commit/58b9f7ac153480382cbd2f4c2f00aec64e7e852b))
* **replay:** start api from process ([403716b](https://github.com/ulixee/secret-agent/commit/403716b3ba853c67ef15868fd6fb9fe1f60dbc1f))
* flatten shared workspaces ([d53da16](https://github.com/ulixee/secret-agent/commit/d53da165d649163dcb724225a2ea43ce88d7eacc))





# 1.0.0-alpha.3 (2020-07-07)


### Bug Fixes

* **session-state:** Improve page recorder perf ([14f78b9](https://github.com/ulixee/secret-agent/commit/14f78b9ede550ded32594dc0a773cc880bf02783)), closes [#8](https://github.com/ulixee/secret-agent/issues/8)


### Features

* **dist:** improve packaging for double agent ([df195b6](https://github.com/ulixee/secret-agent/commit/df195b630b90aea343e4bd3005d41b34c4d5431a))
* **emulators:** improve page logging ([cb73806](https://github.com/ulixee/secret-agent/commit/cb73806408ef7c235e4ff70539c8cc49e5cd5d90))





# 1.0.0-alpha.2 (2020-06-27)


### Bug Fixes

* missing dependencies ([67504f0](https://github.com/ulixee/secret-agent/commit/67504f0f070f35ded261ec3c9734d60422b75a96))





# 1.0.0-alpha.1 (2020-06-27)

**Note:** Version bump only for package @secret-agent/core





# 1.0.0-alpha.0 (2020-06-27)

**Note:** Version bump only for package @secret-agent/core
