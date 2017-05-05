import axios from 'axios';
import { LOGIN_REQUEST } from "../Utils/Urls";

class LoginApi {

  static loginUser(user) {

    return axios({
      method: "post",
      url: LOGIN_REQUEST,
      headers: {
        'Content-Type': 'application/json'
      },
      data: user
    })
    .then(response => {
      return response;
    });
  }

}

export default LoginApi;
