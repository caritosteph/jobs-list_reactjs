import React, { Component } from "react";
// import PropTypes from "prop-types";
import OffersApi from "../../services/OffersApi";
import OfferDetail from "../../components/OfferDetail/OfferDetails";

class OfferDetailContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      offerDetail: {}
    };
  }

  componentWillMount() {
    let props = this.props;
    let id = props.location.query.id;

    OffersApi.getOfferDetail(id)
    .then(response => {
      this.setState({
        offerDetail: response
      });
    })
    .catch(error => {
      return error;
    });

  }

  render() {
    let {offerDetail} = this.state;

    return <OfferDetail offerDetail = {offerDetail} />;
  }
}

OfferDetailContainer.propTypes = {

};

export default OfferDetailContainer;
