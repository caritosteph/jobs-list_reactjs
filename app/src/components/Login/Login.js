import React from 'react';
import { PropTypes } from "prop-types";
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/RaisedButton';

const Login = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        hintText = "Username"
        name = "username"
        floatingLabelText = "username"/>
      <TextField
        type = "password"
        hintText = "Password"
        name = "password"
        floatingLabelText="Password"/>
      <FlatButton
        type= "submit"
        label="Primary"
        primary={true}
        backgroundColor="#93e7cf" />
    </form>
  );
};

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default Login;
