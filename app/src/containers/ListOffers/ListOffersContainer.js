import React, { Component } from 'react';
// import { PropTypes } from "prop-types";
import ListOffers from "../../components/ListOffers/ListOffers";
import OffersApi from "../../services/OffersApi";
import DeclineReasonsContainer from "../../containers/DeclineOffer/DeclineReasonsContainer";

class ListOffersContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      offers: []
    };
  }

  componentWillMount() {

    OffersApi.getOffers()
    .then(response => {
      this.setState({
        offers: response.offers
      });
    })
    .catch(error => {
      return error;
    });

  }

  _handleDecline() {
    return <DeclineReasonsContainer />;
  }

  render() {
    let { offers } = this.state;

    return (
      <ListOffers offers = {offers} handleDecline = {this._handleDecline}/>
    );
  }
}

// ListOffersContainer.propTypes = {
//
// };

export default ListOffersContainer;
