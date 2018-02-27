import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import red from 'material-ui/colors/red';
import { configure, addDecorator } from '@storybook/react';

const theme = createMuiTheme({
  palette: {
    primary: { main: blue[500] },
    secondary: { main: red[500] },
  },
});

addDecorator(story => (
  <MuiThemeProvider theme={theme}>
    {story()}
  </MuiThemeProvider>
));

function loadStories() {
  require('../stories/videoChat/video.js');
  require('../stories/videoChat/controls.js');
  require('../stories/videoChat/chat.js');
}

configure(loadStories, module);