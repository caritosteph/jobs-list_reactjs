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

  render() {
    let {reasons} = this.state;

    return <DeclineReasons reasons = {reasons} />;
  }
}

DeclineReasonsContainer.propTypes = {

};

export default DeclineReasonsContainer;
