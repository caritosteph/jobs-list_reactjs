import React, { Component } from 'react';
// import DeclineReasons from "../../components/DeclineOffer/DeclineReasons";
import FlatButton from 'material-ui/RaisedButton';
import DeclineReasonsContainer from "./DeclineReasonsContainer";
import ReasonContainer from "./ReasonContainer";
import DeclineApi from "../../services/DeclineApi";

let declineValues = {
  reason: "",
  reasonComment: ""
};

class WizardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1
    }

    this._handleNextStep = this._handleNextStep.bind(this);
    this._handleDecline = this._handleDecline.bind(this);
    this._handleCancel = this._handleCancel.bind(this);
  }


  _handleNextStep(){
    this.setState({ step: this.state.step + 1 });
  }

  _handleCancel(e) {
    e.preventDefault();
  }

  _saveDeclineValues(values) {
    declineValues = Object.assign({}, declineValues, values);
    return declineValues;
  }

  _handleDecline(e) {
    e.preventDefault();
    let {id} = this.props.query.id;
    console.log(declineValues);
    this.setState({ step: 1 });
    DeclineApi.declineOffer(id,reasons);
  }

  render() {
    let {step} = this.state;
    let fns = {
        nextStep: this._handleNextStep,
        saveDeclineValues: this._saveDeclineValues
    };

    // return (
      switch (step) {
        case 1:
          return <DeclineReasonsContainer
                    nextStep = {this._handleNextStep}
                    saveDeclineValues = {this._saveDeclineValues} />
        case 2:
          return  <ReasonContainer
                    saveDeclineValues = {this._saveDeclineValues}
                    handleDecline = {this._handleDecline} />

      }
  }
}

// WizardContainer.propTypes = {
//
// };

export default WizardContainer;
