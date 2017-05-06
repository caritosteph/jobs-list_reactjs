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
      <div className = "col s4 offset-s4">
        <div className = "content__offer__header">
          <i className = "material-icons">assignment</i>
          <div className = "offer-jobCategory">
            { offerDetail.jobCategoryKey }
          </div>
          <h4 className = "offer-title">{ offerDetail.title }</h4>
        </div>
        <div className = "content__offer__body">
          <div className = "content__offer_status">
            <i className = "material-icons content__offer_status-icon">show_chart</i>
            <h6 className = "content__offer_subtitle">STATUS</h6>
            <div className = "content__offer_subtitle">11.04.2016 at 9:30</div>
            Glückwunsch! Du hast den Job bekommen.
            Bitte überprüfe die Anforderungen zu diesem Job.
          </div>
          <div className = "content__offer_shifts">
            <h1 className = "content__offer_shifts-earnTotal">{ Utils.getCurrencyFormat(offerDetail.earningTotal, true) }</h1>
            <span> Gehalt / { Utils.getCurrencyFormat(offerDetail.earningHourly, true) } pro Stunde </span>
          </div>
          <div className = "content__offer_salary">
            <OfferSalaryDetails salaryDetails = {offerDetail.pricingTables} />
          </div>
          <div className = "content__offer_date">
            <div className = "row">
              <div className = "col s6">
                <h6 className = "content__offer_subtitle">DATUM</h6>
                <p className = "content__offer_dateTime">{ day } { date }</p>
              </div>
              <div className = "col s6">
                <h6 className = "content__offer_subtitle">ZEIT</h6>
                <p className = "content__offer_dateTime">{ beginTime } - { endTime }</p>
              </div>
            </div>
          </div>
          <div className = "content__offer_breakTypes">
            <BreakTypes breakTypes = {offerDetail.breakTypes}/>
          </div>
          <div className = "content__offer_location">
            <h6 className = "content__offer_subtitle">ORT</h6>
            <div className = "row content__offer_location_details">
              <div className = "col s8">
                <p>{ offerDetail.location.locationName }</p>
                <p>{ offerDetail.location.street } { offerDetail.location.streetNumber }</p>
                <p>{ offerDetail.location.postalCode } { offerDetail.location.city }</p>
              </div>
              <div className = "col s4">
                <button className = "waves-effect waves-light btn blue-grey darken-3">MAPS</button>
              </div>
            </div>
          </div>
          <div className = "content__offer_description">
            <h6 className = "content__offer_subtitle">BESCHREIBUNG</h6>
            {offerDetail.description}
          </div>
          <div className = "content__offer_instruction">
            <i className = "material-icons content__offer_status-icon">show_chart</i>
            <div className = "content__offer_subtitle-color">ANFORDERUNGEN & HINWEISE</div>
            <ul>
              <li>{ offerDetail.instructions }</li>
            </ul>
          </div>
          <div className = "content__offer_action">
              <button className = "waves-effect waves-light btn blue-grey darken-3">ACTION BUTTON</button>
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
