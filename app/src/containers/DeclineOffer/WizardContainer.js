import React, { Component } from 'react';
import FlatButton from 'material-ui/RaisedButton';
import DeclineReasonsContainer from "./DeclineReasonsContainer";
import ReasonComentContainer from "./ReasonComentContainer";
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
    let {id} = this.props;
    console.log(id);
    this.setState({ step: 1 });
    DeclineApi.declineOffer(id,reasons);
  }

  render() {
    let {step} = this.state;
    let view = "";
    // let { openDecline } = this.props;

    switch (step) {
      case 1:
        return <DeclineReasonsContainer
                  nextStep = {this._handleNextStep}
                  saveDeclineValues = {this._saveDeclineValues} />
        // break;
      case 2:
        return  <ReasonComentContainer
                  saveDeclineValues = {this._saveDeclineValues}
                  handleDecline = {this._handleDecline} />
        // break;
    }

    // return (
    //
    //   <Dialog
    //       title = "Decline Offer"
    //       modal = {true}
    //       open = {openDecline} >
    //       {view}
    //   </Dialog>
    // )
  }
}

// WizardContainer.propTypes = {
//
// };

export default WizardContainer;
