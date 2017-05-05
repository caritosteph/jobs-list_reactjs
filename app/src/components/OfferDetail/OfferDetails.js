import React from "react";
import { PropTypes } from "prop-types";
import Utils from "../../Utils/Utils";
import OfferSalaryDetails from "./OfferSalaryDetails";
import BreakTypes from "./BreakTypes";

const OfferDetail = ({offerDetail}) => {

  const beginDate = offerDetail.shifts[0].beginDate;
  const endDate = offerDetail.shifts[0].endDate;

  const day = Utils.getDayFormat(beginDate);
  const date = Utils.getDateFormat(beginDate);

  const beginTime = Utils.getHourFormat(beginDate);
  const endTime = Utils.getHourFormat(endDate);

  return (
    <div className = "row">
      <div className="col s4 offset-s4">
        <div className="offer-header">
          <i className="material-icons">assignment</i>
          <div className="offer-jobCategory">
            {offerDetail.jobCategoryKey}
          </div>
          <h4 className="offer-title">{offerDetail.title}</h4>
        </div>
        <div className="offer-body ">
          <div className = "offer-status">
            <i className="material-icons offer-status-icon">show_chart</i>
            <h6 className="offer-subtitle">STATUS</h6>
            <div className="offer-subtitle">11.04.2016 at 9:30</div>
            Glückwunsch! Du hast den Job bekommen.
            Bitte überprüfe die Anforderungen zu diesem Job.
          </div>
          <div className="offer-shifts">
            <h1 className="offer-earnTotal-shifts">{ Utils.getCurrencyFormat(offerDetail.earningTotal, true) }</h1>
            <span className="offer-earnHourly"> Gehalt / { Utils.getCurrencyFormat(offerDetail.earningHourly, true) } pro Stunde </span>
          </div>
          <div className = "offer-salary-details">
            <OfferSalaryDetails salaryDetails = {offerDetail.pricingTables}/>
          </div>
          <div className = "offer-date-details">
            <div className="row">
              <div className="col s6">
                <h6 className="offer-subtitle">DATUM</h6>
                <p className="offer-dateTime">{day} {date}</p>
              </div>
              <div className="col s6">
                <h6 className="offer-subtitle">ZEIT</h6>
                <p className="offer-dateTime">{beginTime} - {endTime}</p>
              </div>
            </div>
          </div>
          <div className="offer-breakTypes">
            <BreakTypes breakTypes = {offerDetail.breakTypes}/>
          </div>
          <div className="offer-location">
            <h6 className="offer-subtitle">ORT</h6>
            <div className="row offer-location-details">
              <div className="col s8">
                <p>{ offerDetail.location.locationName }</p>
                <p>{ offerDetail.location.street } { offerDetail.location.streetNumber }</p>
                <p>{ offerDetail.location.postalCode } { offerDetail.location.city }</p>
              </div>
              <div className="col s4">
                <button className="waves-effect waves-light btn blue-grey darken-3">MAPS</button>
              </div>
            </div>
          </div>
          <div className="offer-description">
            <h6 className="offer-subtitle">BESCHREIBUNG</h6>
            {offerDetail.description}
          </div>
          <div className="offer-instruction">
            <i className="material-icons offer-status-icon">show_chart</i>
            <div className="offer-subtitle-instruction">ANFORDERUNGEN & HINWEISE</div>
            <ul>
              <li>{ offerDetail.instructions }</li>
            </ul>
          </div>
          <div className="offer-action">
              <button className="waves-effect waves-light btn blue-grey darken-3">ACTION BUTTON</button>
          </div>
        </div>
      </div>
    </div>

  );
};

OfferDetail.propTypes = {
  offerDetail: PropTypes.object.isRequired
};
export default OfferDetail;
