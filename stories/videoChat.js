import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Controls from '../components/videoChat/controls';
import Video from '../components/videoChat/video';
import Chat from '../components/videoChat/chat';
import VideoChat from '../containers/videoChat';

storiesOf('Video Controls', module)
  .add('default', () => (
    <Controls onClick={action('option clicked')} />
  ))
  .add('show', () => (
    <Controls onClick={action('option clicked')} show />
  ))
  .add('custom width', () => (
    <Controls onClick={action('option clicked')} width={500} show />
  ))
  .add('mic off', () => (
    <Controls onClick={action('option clicked')} micOff show />
  ))
  .add('video off', () => (
    <Controls onClick={action('option clicked')} videoOff show />
  ))
  .add('mic & video off', () => (
    <Controls onClick={action('option clicked')} micOff videoOff show />
  ));

storiesOf('Video', module)
  .add('default', () => (
    <Video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" />
  ))
  .add('custom width', () => (
    <Video width={320} src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" />
  ));

storiesOf('Video Chat', module)
  .add('default (200)', () => (
    <Chat />
  ))
  .add('custom width (320), local video', () => (
    <Chat width={320} videoLocal="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" />
  ))
  .add('custom width (640), peer video', () => (
    <Chat width={640} videoPeer="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" />
  ))
  .add('custom width (320), local & peer video', () => (
    <Chat
      width={320}
      videoLocal="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      videoPeer="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
    />
  ))
  .add('fixed controls', () => (
    <Chat fixed />
  ));

storiesOf('Web Cam Chat', module)
  .add('default (200)', () => (
    <VideoChat />
  ))
  .add('custom width (320)', () => (
    <VideoChat width={320} />
  ))
  .add('custom width (640)', () => (
    <VideoChat width={640} />
  ))
  .add('fixed controls', () => (
    <VideoChat fixed />
  ));
