import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
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
    <div className = "content__offer col s4">
      <div className = "content__offer__header">
            <i className = "material-icons ">assignment</i>
            <div className = "content__offer_jobCategory">
              { offer.jobCategoryKey }
            </div>
            <h4 className = "content__offer_title">{ offer.title }</h4>
            <h1 className = "content__offer_earnTotal">{ Utils.getCurrencyFormat(offer.earningTotal, true) }</h1>
            <span>{ Utils.getCurrencyFormat(offer.earningHourly, true) } pro Stunde </span>
      </div>
      <div className = "content__offer__body">
        <i className = "material-icons">place</i><span>{ offer.location.street }</span>
        <div className = "row">
          <div className = "col s6">
            <h6 className = "content__offer_subtitle">DATUM</h6>
            <div className = "content__offer_dateTime">{ day } { date }</div>
          </div>
          <div className = "col s6">
            <h6 className = "content__offer_subtitle">ZEIT</h6>
            <div className = "content__offer_dateTime">{ beginTime } - { endTime }</div>
          </div>
        </div>
      </div>
      <div className="content__offer__footer">
            <Link to={{
                pathname,
                query: { id }
              }} >
              <button className = "waves-effect waves-light btn blue-grey darken-3">ZEIG MIR DETAILS</button>
            </Link>
          <button data-target = "wizard" className = "waves-effect waves-teal btn-flat" onClick={()=> handleOpenDecline(id)}>NICHT INTERESSIERT</button>
      </div>
    </div>
  );
};

Offer.propTypes = {
  offer: PropTypes.object.isRequired,
  handleOpenDecline: PropTypes.func.isRequired
};

export default Offer;
