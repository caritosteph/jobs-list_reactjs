import React from 'react';
import { BrowserRouter, Route, browserHistory } from 'react-router-dom';
import Main from './containers/Main';

export default (
  <BrowserRouter history = {browserHistory}>
    <Route path="/" component= {Main} />
  </BrowserRouter>
);
