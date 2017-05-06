import React from 'react';
import { PropTypes } from "prop-types";
import Utils from "../../Utils/Utils";

const SalaryDetail = ({salaryDetail}) => {
  return (
    <div>
      <div className = "row">
        <div className = "col s9">
          { salaryDetail.times ? salaryDetail.times + " x " : ""} {Utils.convertMinToHours(salaryDetail.minutes)} {salaryDetail.name} <span className="content__offer_salary_subtitle">{ salaryDetail.unpaid ? "(unbezahlt)" : `(${salaryDetail.earningHourly} /h)`}</span>
        </div>
        <div className = "col s3 content__offer_salary-align">
          { Utils.getCurrencyFormat(salaryDetail.earningTotal) }
        </div>
      </div>
    </div>

  );
};

SalaryDetail.propTypes = {
  salaryDetail: PropTypes.object.isRequired
};

export default SalaryDetail;
