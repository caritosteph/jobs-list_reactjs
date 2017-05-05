import React, { Component } from 'react';
import ListOffers from "../../components/ListOffers/ListOffers";
import OffersApi from "../../services/OffersApi";
import WizardContainer from "../DeclineOffer/WizardContainer";

class ListOffersContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      offers: [],
      offerId: ""
    };
    this._handleOpenDecline = this._handleOpenDecline.bind(this);
    this._updateOffers = this._updateOffers.bind(this);
  }

  componentWillMount() {
    OffersApi.getOffers()
    .then(response => {
      if(response.status === 200) {
        this.setState({
          offers: response.data.offers
        });
      }else{
        this.setState({
          offers: []
        });
      }
    })
    .catch((error) => {
      // this.setState({
      //   offers: []
      // });
      return error;
    });
  }

  _handleOpenDecline(id) {
    this.setState({
      offerId: id
    });
    $('#wizard').openModal();
  }

  _updateOffers() {
    let { offers, offerId } = this.state;
    let offersUpdated = offers.filter((offer) => {
      return offer.id != offerId;
    });
    this.setState({
      offers: offersUpdated
    });
  }

  render() {
    let { offers, offerId } = this.state;

    return (
      <div>
        <ListOffers offers = {offers} handleOpenDecline = {this._handleOpenDecline} />
        <WizardContainer id = {offerId} updateOffers = {this._updateOffers}/>
      </div>
    );

  }
}

export default ListOffersContainer;
