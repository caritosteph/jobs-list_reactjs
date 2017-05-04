import React, { Component } from 'react';
// import { PropTypes } from "prop-types";
import ListOffers from "../../components/ListOffers/ListOffers";
import OffersApi from "../../services/OffersApi";
// import WizardContainer from "../DeclineOffer/WizardContainer";
// import Dialog from 'material-ui/Dialog';

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
    .catch(() => {
      this.setState({
        offers: []
      });
    });

  }

  _handleOpenDecline(id) {
    this.setState({
      openDecline: true,
      offerId: id
    });
  }

  render() {
    let { offers } = this.state;
// , openDecline, offerId
    return (
      <div>
        <ListOffers offers = {offers} handleOpenDecline = {this._handleOpenDecline}/>
        {/* <Dialog
            title = "Decline Offer"
            modal = {true}
            open = {openDecline} >
            <WizardContainer id = {offerId}/>
        </Dialog> */}
      </div>
    );
  }
}

// ListOffersContainer.propTypes = {
//
// };

export default ListOffersContainer;
