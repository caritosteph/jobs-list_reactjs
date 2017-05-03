import React, { Component } from "react";
import Login from "../../components/Login/Login";
import LoginError from "../../components/Login/LoginError";
import LoginApi from "../../services/LoginApi";
import { Redirect } from "react-router-dom";
import { setAccessToken } from "../../config/AuthConfig";

class LoginContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      loginUser: false,
      loginResponse: {}
    };

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e){
    e.preventDefault();

    let email = e.target.email.value;
    let password = e.target.password.value;

    let loginUser = {email, password};
    LoginApi.loginUser(loginUser)
    .then(response => {
      this.setState({
        loginUser: true,
        loginResponse: response
      });
      setAccessToken(response.access_token);
    })
    .catch(() => {
      this.setState({
        loginuser: false
      });
    });
  }

  render() {
    let { loginUser, loginResponse } = this.state;

    if (loginUser) {
      return (
        <Redirect to={{
            pathname: '/offers',
            query: { loginResponse }
          }} />
      );
    }

    return (
      <div>
        <Login handleSubmit = {this._handleSubmit}/>
        {!loginUser ? <LoginError /> : ""}
      </div>

    );
  }
}

export default LoginContainer;
