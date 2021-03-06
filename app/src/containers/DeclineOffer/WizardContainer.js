import React, { Component } from "react";
import DeclineReasonsContainer from "./DeclineReasonsContainer";
import ReasonComentContainer from "./ReasonComentContainer";
import DeclineApi from "../../services/DeclineApi";
import Error from "../../components/common/Error";
import { PropTypes } from "prop-types";

let declineValues = {
  reason: "",
  reasonComment: ""
};

class WizardContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      step: 1
    };

    this._handleNextStep = this._handleNextStep.bind(this);
    this._handleDecline = this._handleDecline.bind(this);
    this._handleCancel = this._handleCancel.bind(this);
    this._init = this._init.bind(this);
  }


  _handleNextStep(){
    this.setState({
      step: this.state.step + 1
    });
  }

  _handleCancel(e) {
    e.preventDefault();
    this._init();
  }

  _saveDeclineValues(values) {
    declineValues = Object.assign({}, declineValues, values);
    return declineValues;
  }

  _handleDecline(e) {
    e.preventDefault();

    let { id, updateOffers } = this.props;

    DeclineApi.declineOffer(id, declineValues)
    .then( response => {
      if( response.status === 200 ){
        updateOffers();
        this._init();
      }
    })
    .catch( () => {
      this._init();
      $('#error').openModal();
    });

  }

  _init() {
    $('#wizard').closeModal();
    this.setState({ step: 1 });
  }

  render() {
    let { step } = this.state;
    let view = "";

    switch (step) {
      case 1:
        view = ( <DeclineReasonsContainer
                  nextStep = {this._handleNextStep}
                  saveDeclineValues = {this._saveDeclineValues}
                  handleCancel = {this._handleCancel} /> );
        break;
      case 2:
        view = ( <ReasonComentContainer
                  saveDeclineValues = {this._saveDeclineValues}
                  handleDecline = {this._handleDecline}
                  handleCancel = {this._handleCancel} /> );
        break;
    }

    return (
      <div>
        <div id = "wizard" className = "modal">
          <div className = "modal-content">
            { view }
          </div>
        </div>
        <Error />
      </div>
    );
  }
}

WizardContainer.propTypes = {
  id: PropTypes.string.isRequired,
  updateOffers: PropTypes.func.isRequired
};

export default WizardContainer;
