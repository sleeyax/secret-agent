# AudioTrackList

<div class='overview'><span class="seoSummary">The <strong><code>AudioTrackList</code></strong> interface is used to represent a list of the audio tracks contained within a given HTML media element, with each track represented by a separate <a href="/en-US/docs/Web/API/AudioTrack" title="The AudioTrack interface represents a single audio track from one of the HTML media elements, <audio> or <video>. "><code>AudioTrack</code></a> object in the list.</span></div>

<div class='overview'>Retrieve an instance of this object with <a href="/en-US/docs/Web/API/HTMLMediaElement/audioTracks" title="The read-only audioTracks property on HTMLMediaElement objects returns an&nbsp;AudioTrackList object listing all of the&nbsp; AudioTrack objects representing the media element's audio tracks."><code>HTMLMediaElement.audioTracks</code></a>.&nbsp;The individual tracks can be accessed using array syntax.</div>

## Properties

<ul class="items properties">
  <li>
    <a href="">length</a>
    <div>The number of tracks in the list.</div>
  </li>
  <li>
    <a href="">onaddtrack</a>
    <div>An event handler to be called when the <code><a href="/en-US/docs/Web/Events/addtrack" title="/en-US/docs/Web/Events/addtrack">addtrack</a></code> event is fired, indicating that a new audio track has been added to the media element.</div>
  </li>
  <li>
    <a href="">onchange</a>
    <div>An event handler to be called when the <code><a href="/en-US/docs/Web/Events/change" title="/en-US/docs/Web/Events/change">change</a></code> event occurs. This occurs when one or more tracks have been enabled or disabled by their <a href="/en-US/docs/Web/API/AudioTrack/enabled" title="The AudioTrack property enabled specifies whether or not the described audio track is currently enabled for use. If the track is disabled by setting enabled to false, the track is muted and does not produce audio."><code>enabled</code></a> flag being changed.</div>
  </li>
  <li>
    <a href="">onremovetrack</a>
    <div>An event handler to call when the <code><a href="/en-US/docs/Web/Events/removetrack" title="/en-US/docs/Web/Events/removetrack">removetrack</a></code> event is sent, indicating that an audio track has been removed from the media element.</div>
  </li>
</ul>

## Methods

<ul class="items methods">
  <li>
    <a href="">getTrackById()</a>
    <div>Returns the <a href="/en-US/docs/Web/API/AudioTrack" title="The AudioTrack interface represents a single audio track from one of the HTML media elements, <audio> or <video>. "><code>AudioTrack</code></a> found within the <code>AudioTrackList</code> whose <a href="/en-US/docs/Web/API/AudioTrack/id" title="The id property contains a string which uniquely identifies the track represented by the AudioTrack."><code>id</code></a> matches the specified string. If no match is found, <code>null</code> is returned.</div>
  </li>
</ul>

## Events