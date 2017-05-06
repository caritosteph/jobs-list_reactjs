import React from 'react';
import { PropTypes } from "prop-types";
import SalaryDetail from "./SalaryDetail";
import Utils from "../../Utils/Utils";

const OfferSalaryDetails = ({salaryDetails}) => {
  return (
    <div>
      <h6 className = "content__offer_subtitle">GEHALT DETAILS</h6>
      <div className = "content__offer__salary_detail">
        {
          salaryDetails.map((salaryDetail, key) => (
            <SalaryDetail key = {key} salaryDetail = {salaryDetail} />
          ))
        }
      </div>
      <hr/>
      <div className = "row content__offer__salary_detail">
        <div className = "col s9">
          <p><b>Gehalt, 1 Tag gesamt</b></p>
        </div>
        <div className = "col s3 content__offer_salary-align">
          <p><b>{ Utils.getTotalCurrency(salaryDetails) }</b></p>
        </div>
      </div>
    </div>
  );
};

OfferSalaryDetails.propTypes = {
  salaryDetails: PropTypes.array.isRequired
};

export default OfferSalaryDetails;
