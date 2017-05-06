import axios from "axios";
import { DECLINE_REASON_REQUEST, DECLINE_OFFER_REQUEST } from "../Utils/Urls";
import { getAccessToken } from "../Utils/AuthConfig";

class DeclineApi {

  static getDeclineReasons() {

    return axios({
      method: "get",
      url: DECLINE_REASON_REQUEST,
      headers: {
        "Authorization": `Bearer ${getAccessToken()}`
      }
    })
    .then(response => {
      return response;
    });

  }

  static declineOffer(id, reasons) {

    return axios({
      method: "delete",
      url: DECLINE_OFFER_REQUEST + id,
      headers: {
        "Authorization": `Bearer ${getAccessToken()}`
      },
      data: reasons
    })
    .then(response => {
      return response;
    });

  }

}

export default DeclineApi;
