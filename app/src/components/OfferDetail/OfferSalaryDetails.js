import React from 'react';
import { PropTypes } from "prop-types";
import SalaryDetail from "./SalaryDetail";
import Utils from "../../Utils/Utils";

const OfferSalaryDetails = ({salaryDetails}) => {
  return (
    <div>
      <h6 className="offer-subtitle">GEHALT DETAILS</h6>
      <div className="offer-salary">
        {
          salaryDetails.map((salaryDetail, key) => (
            <SalaryDetail key = {key} salaryDetail = {salaryDetail} />
          ))
        }
      </div>
      <div className="row offer-total-salary">
        <div className="col s9">
          <p>Gehalt, 1 Tag gesamt</p>
        </div>
        <div className="col s3 offer-salary-align">
          <p>{ Utils.getTotalCurrency(salaryDetails) }</p>
        </div>
      </div>
    </div>
  );
};

OfferSalaryDetails.propTypes = {
  salaryDetails: PropTypes.array.isRequired
};
export default OfferSalaryDetails;
