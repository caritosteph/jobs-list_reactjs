import React, {Component} from 'react';
import Reason from "../../components/DeclineOffer/Reason";

class ReasonContainer extends Component {

  constructor(props) {
    super(props);
    this._saveReasonComent = this._saveReasonComent.bind(this);
  }
  _saveReasonComent(e) {
    e.preventDefault();
    let {saveDeclineValues, handleDecline} = this.props;
    let reasonComment = {
      reasonComment: e.target.reasonComment.value
    }
    console.log(e.target.reasonComment.value);
    saveDeclineValues(reasonComment);
    handleDecline(e);
  }

  render() {
    return <Reason saveReasonComent = {this._saveReasonComent}/>;
  }
}

export default ReasonContainer;
