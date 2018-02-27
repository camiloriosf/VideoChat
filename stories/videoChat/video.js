import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import Video from '../../components/videoChat/video';

storiesOf('Video', module)
  .add('default', () => (
    <Video />
  ))
  .add('custom width', () => (
    <Video width={320} />
  ));
