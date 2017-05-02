import React from "react";
import { PropTypes } from "prop-types";
import FlatButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

const Offer = ({offer}) => {
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
    </div>
  );
};

Offer.propTypes = {
  offer: PropTypes.object.isRequired
};
export default Offer;
