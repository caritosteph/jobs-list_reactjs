import React from "react";
import { PropTypes } from "prop-types";
// import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";
// import FlatButton from 'material-ui/RaisedButton';

const DeclineReasons = ({reasons, saveReason}) => {
  return (

    <form onSubmit = {saveReason} >
      <div name="reasons" defaultSelected="not_light">
        {
          reasons.map((reason, key) => (
            <div
              value = {reason.name}
              label = {reason.label}
              key = {key}
            />
          ))
        }
      </div>
      <div type = "submit" label="Next" primary={true} backgroundColor="#93e7cf" />
    </form>
  );
};

DeclineReasons.propTypes = {
  reasons: PropTypes.array.isRequired,
  saveReason: PropTypes.func.isRequired
};

export default DeclineReasons;
