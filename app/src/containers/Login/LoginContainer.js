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
      loginUser: false
    };

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e){
    e.preventDefault();

    let username = e.target.username.value;
    let password = e.target.password.value;

    let loginUser = {username, password};
    LoginApi.loginUser(loginUser)
    .then(response => {
      if(response.status === 200 ) {
        this.setState({
          loginUser: true
        });
        setAccessToken(response.data.access_token);
      }else {
        this.setState({
          loginUser: false
        });
      }
    })
    .catch(() => {
      this.setState({
        loginuser: false
      });
    });
  }

  render() {
    let { loginUser } = this.state;

    if (loginUser) {
      return (
        <Redirect to="/offers" />
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
