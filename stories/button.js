import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

storiesOf('Button 3', module)
  .add('with text', () => (
    <Button onClick={action('clicked 1')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked 2')}><span role="img" aria-label="emoji">😀 😎 👍 💯</span></Button>
  ));
