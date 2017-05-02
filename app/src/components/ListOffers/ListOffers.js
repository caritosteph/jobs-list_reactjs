import React from "react";
import { PropTypes } from "prop-types";
import Offer from "./Offer";

const ListOffers = ({offers}) => {
  return (
    <div>
      { offers.map((offer, key) => (
          <Offer key = {key} offer = {offer} />
        ))
      }
    </div>
  );
};
//
ListOffers.propTypes = {
  offers: PropTypes.array.isRequired
  // handleDecline: PropTypes.function.isRequired
};
export default ListOffers;
