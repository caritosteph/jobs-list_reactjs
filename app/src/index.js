"use strict";
/* eslint-disable import/default */
import { render } from "react-dom";
import routes from './routes';
import './assets/styles/main.scss';
import "../../node_modules/materialize-css/dist/js/materialize.min";
require('./favicon.ico');

const rootEl = document.getElementById('app');

render(routes, rootEl);
