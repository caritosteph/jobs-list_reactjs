import React, { Component } from 'react';
import ReasonComent from "../../components/DeclineOffer/ReasonComent";
import { PropTypes } from "prop-types";

class ReasonComentContainer extends Component {

  constructor(props) {
    super(props);
    this._saveReasonComent = this._saveReasonComent.bind(this);
  }
  _saveReasonComent(e) {
    e.preventDefault();
    let {saveDeclineValues, handleDecline} = this.props;
    let reasonComment = {
      reasonComment: e.currentTarget.reasonComment.value
    };

    saveDeclineValues(reasonComment);
    handleDecline(e);
  }

  render() {
    let { handleCancel } = this.props;
    let fns = {
      saveReasonComent: this._saveReasonComent,
      handleCancel: handleCancel
    }
    return <ReasonComent fns = {fns}/>;
  }
}

ReasonComentContainer.propTypes = {
  saveDeclineValues: PropTypes.func.isRequired,
  handleDecline: PropTypes.func.isRequired
};

export default ReasonComentContainer;
