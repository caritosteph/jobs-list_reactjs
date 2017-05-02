import React, { Component } from "react";
// import PropTypes from "prop-types";
import OffersApi from "../../services/Offers/OffersApi";

class OfferDetailContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      offerdetail: {}
    };
  }

  componentWillMount() {
    let props = this.props;
    console.log(props);
    let id = props.location.query.id;

    OffersApi.getOfferDetail(id)
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
    return (
      <div>offerdetailcontainer</div>
    );
  }
}

OfferDetailContainer.propTypes = {

};

export default OfferDetailContainer;
