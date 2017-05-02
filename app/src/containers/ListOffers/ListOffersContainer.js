import React, { Component } from 'react';
// import { PropTypes } from "prop-types";
import ListOffers from "../../components/ListOffers/ListOffers";
import OffersApi from "../../services/Offers/OffersApi";

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

  render() {
    let { offers } = this.state;

    return (
      <ListOffers offers = {offers} />
    );
  }
}

// ListOffersContainer.propTypes = {
//
// };

export default ListOffersContainer;
