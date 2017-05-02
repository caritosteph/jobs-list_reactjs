import React, { Component } from 'react';
// import { PropTypes } from "prop-types";
import ListOffers from "../../components/ListOffers/ListOffers";
import OffersApi from "../../services/OffersApi";
import WizardContainer from "../DeclineOffer/WizardContainer";
import Dialog from 'material-ui/Dialog';

class ListOffersContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      offers: [],
      openDecline: false,
      offerId: ""
    };

    this._handleOpenDecline = this._handleOpenDecline.bind(this);
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

  _handleOpenDecline(id) {
    this.setState({
      openDecline: true,
      offerId: id
    });
  }

  render() {
    let { offers, openDecline, id } = this.state;

    return (
      <div>
        <ListOffers offers = {offers} handleOpenDecline = {this._handleOpenDecline}/>
        <Dialog
            title = "Decline Offer"
            modal = {true}
            open = {openDecline} >
            <WizardContainer id = {id}/>
        </Dialog>
      </div>
    );
  }
}

// ListOffersContainer.propTypes = {
//
// };

export default ListOffersContainer;
