import React from 'react';
import { PropTypes } from "prop-types";
import FlatButton from 'material-ui/RaisedButton';

const WizardDecline = ({handleDecline}) => {
  return (
    <form onSubmit = {handleDecline}>
      <FlatButton label="Not now" primary={true} backgroundColor="#93e7cf" />
      <FlatButton label="Send" primary={true} backgroundColor="#93e7cf" handleDecline = {handleDecline}/>
    </form>
  );
};

WizardDecline.propTypes = {
  handleDecline: PropTypes.function.isRequired
};

export default WizardDecline;
