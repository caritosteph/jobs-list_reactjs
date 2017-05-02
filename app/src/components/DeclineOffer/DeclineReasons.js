import React from "react";
import { PropTypes } from "prop-types";
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";

const DeclineReasons = ({reasons}) => {
  return (
    <RadioButtonGroup name="reasons" defaultSelected="not_light">
      {
        reasons.map((reason, key) => (
          <RadioButton
            value = {reason.name}
            label = {reason.label}
            key = {key}
          />
        ))
      }


    </RadioButtonGroup>
  );
};

DeclineReasons.propTypes = {
  reasons: PropTypes.array.isRequired,
  handleDecline: PropTypes.func.isRequired
};

export default DeclineReasons;
