import React from "react";
import { PropTypes } from "prop-types";
import { Link } from 'react-router-dom';

const Offer = ({offer, handleOpenDecline}) => {
  const pathname = "/offerDetail/" + offer.id;
  const id = offer.id;

  return (
    <div className="offer col s4">
      <div className="offer-header">
          <div>
            <i className="material-icons ">assignment</i>
            <div>
              {offer.jobCategoryKey}
            </div>
            <div>
              {offer.title}
            </div>
            <div>
              {offer.earningTotal}
            </div>
            <div>
              {offer.earningHourly} pro Stunde
            </div>
          </div>
      </div>
      <div className="offer-body">
          <div>{offer.location.street}</div>
          <div className="col s6">
            <p>DATUM</p>
            <p>{offer.shifts[0].beginDate}</p>
          </div>
          <div className="col s6">
            <p>ZEIT</p>
            <p>{offer.shifts[0].beginDate} - {offer.shifts[0].endDate}</p>
          </div>
      </div>
      <div className="offer-footer">
        <div className="row">
          <Link to={{
              pathname,
              query: { id }
            }} >
            <button className="waves-effect waves-light btn blue-grey darken-2">ZEIG MIR DETAILS</button>
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
