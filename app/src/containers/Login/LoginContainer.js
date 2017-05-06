import React, { Component } from "react";
import Login from "../../components/Login/Login";
import LoginError from "../../components/Login/LoginError";
import LoginApi from "../../services/LoginApi";
import { Redirect } from "react-router-dom";
import { setAccessToken } from "../../Utils/AuthConfig";

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
        setAccessToken(response.data.access_token);
        this.setState({
          loginUser: true
        });
      }else {
        $('#login').openModal();
      }
    })
    .catch(() => {
      $('#login').openModal();
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
        <Login handleSubmit = {this._handleSubmit} />
        <LoginError />
      </div>

    );
  }
}

export default LoginContainer;
