import React from 'react';

const LoginError = () => {
  return (
    <div id = "login" className = "modal">
      <div className = "modal-content">
        <h5>FEHLER</h5>
        <hr/>
        <p>Oops, es ist ein Fehler aufgetreten. Überprüfe Email und passwort</p>
      </div>
      <div className = "modal-footer">
        <button className = "modal-action modal-close waves-effect waves-green btn-flat">Ok</button>
      </div>
    </div>
  );
};

export default LoginError;
