import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import Chat from '../../components/videoChat/chat';

storiesOf('Video Chat', module)
  .add('default', () => (
    <Chat />
  ))
  .add('custom width', () => (
    <Chat width={320} />
  ));
