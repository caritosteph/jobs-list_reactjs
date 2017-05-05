import React from "react";
import { PropTypes } from "prop-types";
import Offer from "./Offer";

const ListOffers = ({offers, handleOpenDecline, href}) => {
  return (
    <div className="container">
      <div className="row">
        { offers.map((offer, key) => (
            <Offer
              key = {key}
              offer = {offer}
              handleOpenDecline = {handleOpenDecline}
              href = {href}/>
          ))
        }
      </div>
    </div>
  );
};
//
ListOffers.propTypes = {
  offers: PropTypes.array.isRequired,
  handleOpenDecline: PropTypes.func.isRequired,
  href: PropTypes.string.isRequired
};
export default ListOffers;
