import React, { Component } from "react";
import { PropTypes } from "prop-types";
import DeclineReasons from "../../components/DeclineOffer/DeclineReasons";
import DeclineApi from "../../services/DeclineApi";

class DeclineReasonsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      reasons: [],
      error: ""
    };

    this._saveReason =  this._saveReason.bind(this);
  }

  componentWillMount() {

    DeclineApi.getDeclineReasons()
    .then(response => {
      if(response.status === 200) {
        this.setState({
          reasons: response.data.reasons
        });
      }else{
        this.setState({
          reasons: []
        });
      }
    })
    .catch(error => {
      this.setState({
        error: error
      });
    });

  }

  _saveReason(e) {
    e.preventDefault();
    let {saveDeclineValues, nextStep} = this.props;
    let reason = {
      reason: e.currentTarget.reasons.value
    };

    saveDeclineValues(reason);
    nextStep();
  }

  render() {
    let {reasons} = this.state;

    return <DeclineReasons reasons = {reasons} saveReason = {this._saveReason}/>;
  }
}

DeclineReasonsContainer.propTypes = {
  saveDeclineValues: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired
};

export default DeclineReasonsContainer;
