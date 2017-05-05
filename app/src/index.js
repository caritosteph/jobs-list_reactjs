"use strict";
/* eslint-disable import/default */
import { render } from "react-dom";
import routes from './routes';
import './assets/styles/main.scss';
// import "../../node_modules/materialize-css/node_modules/jquery/dist/jquery";
// import window.$ from 'jquery';

import "../../node_modules/materialize-css/bin/materialize";
require('./favicon.ico');

const rootEl = document.getElementById('app');

render(routes, rootEl);
