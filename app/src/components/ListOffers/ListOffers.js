import React from "react";
import { PropTypes } from "prop-types";
import Offer from "./Offer";

const ListOffers = ({offers, handleOpenDecline}) => {
  return (
    <div className = "container">
      <div className = "row">
        { offers.map((offer, key) => (
            <Offer
              key = {key}
              offer = {offer}
              handleOpenDecline = {handleOpenDecline} />
          ))
        }
      </div>
    </div>
  );
};

ListOffers.propTypes = {
  offers: PropTypes.array.isRequired,
  handleOpenDecline: PropTypes.func.isRequired
};

export default ListOffers;
