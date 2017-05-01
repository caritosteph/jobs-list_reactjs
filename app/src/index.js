"use strict";
/* eslint-disable import/default */
import React from "react";
import { render } from 'react-dom';
import routes from './routes';
import './assets/styles/main.scss';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { tealA400 } from 'material-ui/styles/colors';
require('./favicon.ico');

const rootEl = document.getElementById('app');
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: tealA400
  },
});

injectTapEventPlugin();

render(
  <MuiThemeProvider muiTheme={muiTheme}>
    {routes}
  </MuiThemeProvider>
  , rootEl
);
