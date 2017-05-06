import React from "react";
import { PropTypes } from "prop-types";
import BreakType from "./BreakType";

const BreakTypes = ({breakTypes}) => {
  return (
    <div>
      {
        breakTypes.map((breakType, key) => (
          <BreakType key = {key} breakType = {breakType}/>
        ))
      }
    </div>
  );
};

BreakTypes.propTypes = {
  breakTypes: PropTypes.array.isRequired
};

export default BreakTypes;
