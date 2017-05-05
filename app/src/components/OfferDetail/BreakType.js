import React from 'react';
import { PropTypes } from "prop-types";
import Utils from "../../Utils/Utils";

const BreakType = ({breakType}) => {
  return (
    <div>
      <h6 className="offer-subtitle">HINWEIS</h6>
      { Utils.convertMinToHours(breakType.minutes) } { breakType.description }
    </div>
  );
};

BreakType.propTypes = {
  breakType: PropTypes.object.isRequired
};
export default BreakType;
