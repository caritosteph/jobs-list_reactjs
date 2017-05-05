import React from "react";
import { PropTypes } from "prop-types";

const DeclineReasons = ({reasons, saveReason}) => {
  return (

    <form onSubmit = {saveReason} >
        {
          reasons.map((reason, key) => (
            <div key = {key}>
              <input className="with-gap" name="reasons" type="radio" value = {reason.name} />
              <label>{reason.label}</label>
            </div>
          ))
        }
      <button className="waves-effect waves-teal btn-flat">NICHT JETZT</button>
      <button type="submit" className="waves-effect waves-teal btn-flat">ABSENDEN</button>
    </form>
  );
};

DeclineReasons.propTypes = {
  reasons: PropTypes.array.isRequired,
  saveReason: PropTypes.func.isRequired
};

export default DeclineReasons;
