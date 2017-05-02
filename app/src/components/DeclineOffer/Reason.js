import React from 'react';
import TextField from 'material-ui/TextField';

const Reason = () => {
  return (
    <div>
      <h3>Please enter your reason</h3>
      <TextField
        hintText = "Reason"
        name = "reason"
      />
    </div>
  );
};

export default Reason;
