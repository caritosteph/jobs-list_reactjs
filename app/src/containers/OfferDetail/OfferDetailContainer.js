import React, { Component } from "react";
import OffersApi from "../../services/OffersApi";
import OfferDetail from "../../components/OfferDetail/OfferDetails";
import Loading from "../../components/common/Loading";
import Error from "../../components/common/Error";

class OfferDetailContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      offerDetail: null,
      error: null
    };
  }

  componentWillMount() {
    let props = this.props;
    let id = props.location.query.id;
    OffersApi.getOfferDetail(id)
    .then(response => {
      if( response.status === 200 && response.data){
        this.setState({
          offerDetail: response.data
        });
      }else{
        this.setState({
          offerDetail: null,
          error: "error"
        });
      }
    })
    .catch(error => {
      this.setState({
        error: error
      });
    });

  }

  render() {
    let { offerDetail, error } = this.state;
    let view = "";

    if(offerDetail){
      view = <OfferDetail offerDetail = {offerDetail} />;
    }else if (error) {
      view = <Error />;
    }else {
      view = <Loading />;
    }

    return view;
  }
}

export default OfferDetailContainer;
