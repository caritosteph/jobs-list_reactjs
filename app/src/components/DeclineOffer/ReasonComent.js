import React from 'react';
// import TextField from 'material-ui/TextField';
// import FlatButton from 'material-ui/RaisedButton';
import { PropTypes } from "prop-types";

const ReasonComent = ({saveReasonComent}) => {
  return (
    <form onSubmit = {saveReasonComent}>
      <h3>Please enter your reason</h3>
      <input
        hintText = "Reason"
        name = "reasonComment"
      />
      
      <button type="submit" label="Submit" primary={true} backgroundColor="#93e7cf" />
    </form>
  );
};

ReasonComent.propTypes = {
  saveReasonComent: PropTypes.func.isRequired
};

export default ReasonComent;
