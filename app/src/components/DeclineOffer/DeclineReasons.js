import React from "react";
import { PropTypes } from "prop-types";
import {RadioButton, RadioButtonGroup} from "material-ui/RadioButton";
import FlatButton from 'material-ui/RaisedButton';

const DeclineReasons = ({reasons}) => {
  return (
    <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
      {
        reasons.map((reason, key) => (
          <RadioButton
            value = {reason.name}
            label = {reason.label}
            key = {key}
          />
        ))
      }
      <FlatButton label="Not now" primary={true} backgroundColor="#93e7cf" />
      <FlatButton label="Send" primary={true} backgroundColor="#93e7cf" />

    </RadioButtonGroup>
  );
};

DeclineReasons.propTypes = {
  reasons: PropTypes.array.isRequired
};

export default DeclineReasons;
