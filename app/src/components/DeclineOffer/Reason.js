import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/RaisedButton';

const Reason = ({saveReasonComent}) => {
  return (
    <form onSubmit = {saveReasonComent}>
      <h3>Please enter your reason</h3>
      <TextField
        hintText = "Reason"
        name = "reasonComment"
      />
      <FlatButton type="submit" label="Submit" primary={true} backgroundColor="#93e7cf" />
    </form>
  );
};

export default Reason;
