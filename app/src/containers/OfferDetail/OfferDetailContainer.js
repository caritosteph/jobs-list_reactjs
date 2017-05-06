import React, { Component } from "react";
import OffersApi from "../../services/OffersApi";
import OfferDetail from "../../components/OfferDetail/OfferDetails";
import Loading from "../../components/common/Loading";
import Error from "../../components/common/Error";

class OfferDetailContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      offerDetail: null
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
          offerDetail: null
        });
      }
    })
    .catch(() => {
      $("#error").openModal();
    });

  }

  render() {
    let { offerDetail } = this.state;
    let view = "";

    if( offerDetail ){
      view = <OfferDetail offerDetail = {offerDetail} />;
    } else {
      view = <Loading />;
    }

    return (
      <div>
        { view }
        <Error />
      </div>
    );
  }
}

export default OfferDetailContainer;
