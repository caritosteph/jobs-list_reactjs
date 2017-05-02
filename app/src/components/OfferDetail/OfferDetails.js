import React from "react";
import { PropTypes } from "prop-types";
import FlatButton from 'material-ui/RaisedButton';

const OfferDetail = ({offerDetail}) => {
  return (
    <div>
      <p>Title: {offerDetail.title}</p>
      <p>description: {offerDetail.description}</p>
      <p>companyName: {offerDetail.companyName}</p>
      <FlatButton label="Action button" primary={true} backgroundColor="#93e7cf" />
    </div>
  );
};

OfferDetail.propTypes = {
  offerDetail: PropTypes.object.isRequired
};
export default OfferDetail;
