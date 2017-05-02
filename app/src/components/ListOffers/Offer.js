import React from "react";
import { PropTypes } from "prop-types";
import FlatButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

const Offer = ({offer, handleOpenDecline}) => {
  const pathname = "/offerDetail/" + offer.id;
  const id = offer.id;

  return (
    <div>
      <p>Title: {offer.title}</p>
      <Link to={{
          pathname,
          query: { id }
        }} >
        <FlatButton label="More Detail" primary={true} backgroundColor="#93e7cf" />
      </Link>
      {/* <Link to="/reasons" > */}
        <FlatButton label="Decline" primary={true} backgroundColor="#93e7cf" onClick={()=> handleOpenDecline(offer.id)}/>
      {/* </Link> */}
    </div>
  );
};

Offer.propTypes = {
  offer: PropTypes.object.isRequired
  // handleOpenDecline: PropTypes.function.isRequired
};

export default Offer;
