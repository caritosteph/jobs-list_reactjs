import React from "react";
import { PropTypes } from "prop-types";

const Offer = ({offer}) => {
  return (
    <div>
      <p>Title: {offer.title}</p>
    </div>
  );
};

Offer.propTypes = {
  offer: PropTypes.object.isRequired
};
export default Offer;
