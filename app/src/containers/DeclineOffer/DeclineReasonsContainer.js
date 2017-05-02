import React, { Component } from "react";
// import { PropTypes } from "prop-types";
import DeclineReasons from "../../components/DeclineOffer/DeclineReasons";
import DeclineApi from "../../services/DeclineApi";

class DeclineReasonsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      reasons: []
    };

    this._saveReason =  this._saveReason.bind(this);
  }

  componentWillMount() {

    DeclineApi.getDeclineReasons()
    .then(response => {
      this.setState({
        reasons: response.reasons
      });
    })
    .catch(error => {
      return error;
    });

  }

  _saveReason(e) {
    e.preventDefault();
    let {saveDeclineValues, nextStep} = this.props;
    let reason = {
      reason: e.target.reasons.value
    }
    saveDeclineValues(reason);
    nextStep();
  }

  render() {
    let {reasons} = this.state;

    return <DeclineReasons reasons = {reasons} saveReason = {this._saveReason}/>;
  }
}

DeclineReasonsContainer.propTypes = {

};

export default DeclineReasonsContainer;
