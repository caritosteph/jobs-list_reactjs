
import "whatwg-fetch";
import { loginRequest } from "../../configs/Urls";

class LoginApi {
  static loginUser (loginUser) {
    return fetch(loginRequest, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginUser)
    })
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
  }
}

export default LoginApi;
