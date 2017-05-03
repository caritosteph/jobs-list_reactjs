import React from "react";
import { PropTypes } from "prop-types";
import logo from "../../assets/images/login.png";

const Login = ({handleSubmit}) => {
  return (
    <div className = "container ctn-login">
      <div className="row">
        <div className="col s6 offset-s3">
          <h5 className = "login">LOGIN</h5>
        </div>
      </div>
      <form className = "col" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s6 offset-s3">
            <input name="email" id="email" type="email" className="validate"/>
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6 offset-s3">
            <input name="password" id="password" type="password" className="validate"/>
            <label htmlFor="password">Passwort</label>
          </div>
        </div>
        <div className="row">
          <div className="col s6 offset-s3 button-login">
            <button type="submit" className="waves-effect waves-light btn">EINLOGGEN</button>
          </div>
        </div>
        <div className="row">
          <div className="col s6 offset-s3 button-forgot-pass">
            <button className="waves-effect waves-teal btn-flat">PASSWORT VERGESSEN</button>
          </div>
        </div>
        <div className="row">
          <div className="col s6 offset-s3 button-login">
            <img src = {logo}/>
          </div>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default Login;
