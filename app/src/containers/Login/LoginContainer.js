import React, { Component } from "react";
// import { PropTypes } from "prop-types";
import Login from "../../components/Login/Login";
import LoginApi from "../../services/Login/LoginApi";

class LoginContainer extends Component {
  constructor(props){
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e){
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;

    let loginUser = {username, password};
    LoginApi.loginUser(loginUser);
  }

  render() {
    return <Login handleSubmit = {this._handleSubmit}/>;
  }
}

// LoginContainer.propTypes = {
//
// };

export default LoginContainer;
