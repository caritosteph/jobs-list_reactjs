
import "whatwg-fetch";
import { LOGIN_REQUEST } from "../../constants/Urls";

class LoginApi {

  static loginUser(user) {
    return fetch(LOGIN_REQUEST, {
      method: "POST",
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
