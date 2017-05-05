import React from "react";
import { PropTypes } from "prop-types";

const DeclineReasons = ({reasons, fns}) => {

  const { saveReason, handleCancel } = fns;

  return (
    <div>
      <h5 className="offer-decline-title">Warum lehnst Du diesen Job ab?</h5>
      <form onSubmit = {saveReason} >
        {
          reasons.map((reason, key) => (
            <p key = {key}>
              <input className="with-gap" name="reasons" type="radio" id= {key} value = {reason.name}/>
              <label htmlFor={key}>{reason.label}</label>
            </p>
          ))
        }
        <div className="row offer-decline-button">
          <div className="col s6">
            <button className="waves-effect waves-teal btn-flat" onClick = {handleCancel}>NICHT JETZT</button>
          </div>
          <div className="col s6">
            <button type="submit" className="waves-effect waves-teal btn-flat">ABSENDEN</button>
          </div>
        </div>
      </form>
    </div>
  );
};

DeclineReasons.propTypes = {
  reasons: PropTypes.array.isRequired,
  fns: PropTypes.object.isRequired
};

export default DeclineReasons;
