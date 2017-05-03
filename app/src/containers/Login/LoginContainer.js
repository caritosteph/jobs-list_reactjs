import React, { Component } from "react";
import Login from "../../components/Login/Login";
import LoginApi from "../../services/LoginApi";
import { Redirect } from "react-router-dom";
import { setAccessToken } from "../../config/AuthConfig";

class LoginContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      loginuser: false,
      loginresponse: {},
      errormessage: ""
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
        loginuser: true,
        loginresponse: response
      });
      setAccessToken(response.access_token);
    })
    .catch(error => {
      this.setState({
        loginuser: false,
        errormessage: error
      });

    });
  }

  render() {
    let { loginuser, loginresponse } = this.state;

    if (loginuser) {
      return (
        <Redirect to={{
            pathname: '/offers',
            query: { loginresponse }
          }} />
      );
    }

    return (
        <Login handleSubmit = {this._handleSubmit}/>
    );
  }
}

export default LoginContainer;
