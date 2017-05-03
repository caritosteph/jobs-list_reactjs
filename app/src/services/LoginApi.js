
import "whatwg-fetch";
import { LOGIN_REQUEST } from "../config/Urls";

class LoginApi {

  static loginUser(user) {

    return fetch(LOGIN_REQUEST, {
      method: "POST",
      mode: "no-cors",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(response => {
      return response.json();
    });
  }

}

export default LoginApi;
