import React from "react";
import {
  BrowserRouter as Router,
  Route,
  browserHistory
} from "react-router-dom";
// import Main from './containers/Main';
import LoginContainer from "./containers/Login/LoginContainer";
import ListOffersContainer from "./containers/ListOffers/ListOffersContainer";
import OfferDetailContainer from "./containers/OfferDetail/OfferDetailContainer";

export default (
  <Router history = {browserHistory}>
    <div>
      {/* <Route exact path="/" component= {Main} /> */}
      <Route exact path="/" component={LoginContainer} />
      <Route path="/offers" component={ListOffersContainer} />
      <Route path="/offerDetail/:id" component={OfferDetailContainer} />
    </div>
  </Router>
);
