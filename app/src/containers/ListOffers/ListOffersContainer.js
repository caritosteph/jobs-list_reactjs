import React, { Component } from "react";
import ListOffers from "../../components/ListOffers/ListOffers";
import EmptyOffer from "../../components/ListOffers/EmptyOffer";
import OffersApi from "../../services/OffersApi";
import WizardContainer from "../DeclineOffer/WizardContainer";
import Loading from "../../components/common/Loading";
import Error from "../../components/common/Error";

class ListOffersContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      offers: [],
      offerId: "",
      loading: false
    };

    this._handleOpenDecline = this._handleOpenDecline.bind(this);
    this._updateOffers = this._updateOffers.bind(this);
  }

  componentWillMount() {
    this.setState({
      loading: true
    });
    OffersApi.getOffers()
    .then( response => {
      if( response.status === 200 ) {
        this.setState({
          offers: response.data.offers,
          loading: false
        });
      } else {
        this.setState({
          offers: [],
          loading: false
        });
      }
    })
    .catch( () => {
      $('#error').openModal();
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
    let { offers, offerId, loading } = this.state;
    let view = null;

    if( loading ){
      view = <Loading />;
    } else {
      if( offers.length > 0 ){
        view = <ListOffers offers = {offers} handleOpenDecline = {this._handleOpenDecline} />;
      } else if( offers.length === 0 ){
        view = <EmptyOffer />;
      }
    }

    return (
      <div>
        <div className = "content___offer_header">
          <h5><b>Jobs Entdecken</b></h5>
        </div>
        { view }
        <WizardContainer id = {offerId} updateOffers = {this._updateOffers}/>
        <Error />
      </div>
    );

  }
}

export default ListOffersContainer;
