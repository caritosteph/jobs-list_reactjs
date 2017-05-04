import React from "react";
import { PropTypes } from "prop-types";
import { Link } from 'react-router-dom';
import Utils from "../../Utils/Utils";

const Offer = ({offer, handleOpenDecline}) => {
  const pathname = "/offerDetail/" + offer.id;
  const id = offer.id;
  const beginDate = offer.shifts[0].beginDate;
  const endDate = offer.shifts[0].endDate;

  const day = Utils.getDayFormat(beginDate);
  const date = Utils.getDateFormat(beginDate);

  const beginTime = Utils.getHourFormat(beginDate);
  const endTime = Utils.getHourFormat(endDate);

  return (
    <div className="offer col s4">
      <div className="offer-header">
            <i className="material-icons ">assignment</i>
            <div className="offer-jobCategory">
              {offer.jobCategoryKey}
            </div>
            <h4 className="offer-title">{offer.title}</h4>
            <h1 className="offer-earnTotal">{Utils.getCurrencyFormat(offer.earningTotal)}</h1>
            <span className="offer-earnHourly"> {Utils.getCurrencyFormat(offer.earningHourly)} pro Stunde </span>
      </div>
      <div className="offer-body ">
        <i className="material-icons">place</i><span className="offer-location">{offer.location.street}</span>
        <div className="row">
          <div className="col s6">
            <div className="offer-dateTime">DATUM</div>
            <div className="offer-dateTime-value">{day} {date}</div>
          </div>
          <div className="col s6">
            <div className="offer-dateTime">ZEIT</div>
            <div className="offer-dateTime-value">{beginTime} - {endTime}</div>
          </div>
        </div>
      </div>
      <div className="offer-footer">
            <Link to={{
                pathname,
                query: { id }
              }} >
              <button className="waves-effect waves-light btn blue-grey darken-3">ZEIG MIR DETAILS</button>
            </Link>
          <button className="waves-effect waves-teal btn-flat" onClick={()=> handleOpenDecline(offer.id)}>NICHT INTERESSIERT</button>
      </div>
    </div>
  );
};

Offer.propTypes = {
  offer: PropTypes.object.isRequired,
  handleOpenDecline: PropTypes.func.isRequired
};

export default Offer;
