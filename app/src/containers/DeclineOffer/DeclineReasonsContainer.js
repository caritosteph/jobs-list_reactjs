import React, { Component } from "react";
import { PropTypes } from "prop-types";
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
    .then( response => {
      if( response.status === 200 ) {
        this.setState({
          reasons: response.data.reasons
        });
      } else {
        this.setState({
          reasons: []
        });
      }
    });

  }

  _saveReason(e) {
    e.preventDefault();
    let { saveDeclineValues, nextStep } = this.props;
    let reason = {
      reason: e.currentTarget.reasons.value
    };

    saveDeclineValues(reason);
    nextStep();
  }

  render() {
    let { reasons } = this.state;
    let { handleCancel } = this.props;

    let fns = {
      saveReason: this._saveReason,
      handleCancel: handleCancel
    };

    return <DeclineReasons reasons = {reasons} fns = {fns} />;
  }
}

DeclineReasonsContainer.propTypes = {
  saveDeclineValues: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired
};

export default DeclineReasonsContainer;
