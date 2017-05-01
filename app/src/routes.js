import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  browserHistory
} from 'react-router-dom';
// import Main from './containers/Main';
import LoginContainer from './containers/Login/LoginContainer';

export default (
  <Router history = {browserHistory}>
    <div>
      {/* <Route exact path="/" component= {Main} /> */}
      <Route exact path="/" component={LoginContainer} />
    </div>
  </Router>
);
