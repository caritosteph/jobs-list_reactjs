import React from "react";
import emptyOffer from "../../assets/images/empty-offers.png";

const EmptyOffer = () => {
  return (
    <div className = "container">
      <div className = "row container__emptyOffer">
        <h5>Du hast keine neuen Tasks für diesen Job</h5>
        <img src = {emptyOffer} height = "100px"/>
      </div>
    </div>
  );
};

export default EmptyOffer;
