import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Controls from '../../components/videoChat/controls';

storiesOf('Controls', module)
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
