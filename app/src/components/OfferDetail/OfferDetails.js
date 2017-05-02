import React from "react";
import { PropTypes } from "prop-types";

const OfferDetail = ({offer}) => {
  return (
    <div>
      <p>Title: {offer.title}</p>
      <p>description: {offer.description}</p>
      <p>companyName: {offer.companyName}</p>
    </div>
  );
};

OfferDetail.propTypes = {
  offer: PropTypes.object.isRequired
};
export default OfferDetail;
