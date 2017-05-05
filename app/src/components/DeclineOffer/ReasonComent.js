import React from 'react';
import { PropTypes } from "prop-types";

const ReasonComent = ({fns}) => {

  const { saveReasonComent, handleCancel } = fns;

  return (
    <form onSubmit = {saveReasonComent}>
      <h5 className="offer-decline-title">Please enter your reason</h5>
      <div className="input-field col s6">
         <input type="text" name="reasonComment"/>
         <label htmlFor="reason">Reason</label>
      </div>
      <div className="row offer-decline-button">
        <div className="col s6">
          <button className="waves-effect waves-teal btn-flat" onClick = {handleCancel}>NICHT JETZT</button>
        </div>
        <div className="col s6">
          <button type="submit" className="waves-effect waves-teal btn-flat">ABSENDEN</button>
        </div>
      </div>
    </form>
  );
};

ReasonComent.propTypes = {
  fns: PropTypes.object.isRequired
};

export default ReasonComent;
