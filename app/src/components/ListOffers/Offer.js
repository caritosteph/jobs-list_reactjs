import React from "react";
import { PropTypes } from "prop-types";
import { Link } from 'react-router-dom';

const Offer = ({offer, handleOpenDecline}) => {
  const pathname = "/offerDetail/" + offer.id;
  const id = offer.id;

  return (
    <div className="offer col s4">
      <div className="offer-header">
        {/* <div className="row"> */}
          <i class="material-icons">assignment</i>
          <p>{offer.jobCategoryKey}</p>
        {/* </div> */}
        {/* <div className="row"> */}
          <h4>{offer.title}</h4>
        {/* </div> */}
        {/* <div className="row"> */}
          <h3>{offer.earningTotal}</h3>
        {/* </div> */}
        {/* <div className="row"> */}
          <h5>{offer.earningHourly} pro Stunde</h5>
        {/* </div> */}
      </div>
      <div className="offer-body">
        {/* <div className="row"> */}
          <p>{offer.location.street}</p>
        {/* </div> */}
        {/* <div className="row"> */}
          <div className="col s6">
            <p>DATUM</p>
            <p>{offer.shifts[0].beginDate}</p>
          </div>
          <div className="col s6">
            <p>ZEIT</p>
            <p>{offer.shifts[0].beginDate} - {offer.shifts[0].endDate}</p>
          </div>
        {/* </div> */}
      </div>
      <div className="offer-footer">
        <div className="row">
          <Link to={{
              pathname,
              query: { id }
            }} >
            <button className="waves-effect waves-light btn">ZEIG MIR DETAILS</button>
          </Link>
        </div>
        <div className="row">
          <button className="waves-effect waves-teal btn-flat" onClick={()=> handleOpenDecline(offer.id)}>NICHT INTERESSIERT</button>
        </div>
      </div>
    </div>
  );
};

Offer.propTypes = {
  offer: PropTypes.object.isRequired,
  handleOpenDecline: PropTypes.func.isRequired
};

export default Offer;
