
import "whatwg-fetch";
import { DECLINE_REASON_REQUEST, DECLINE_OFFER_REQUEST } from "../config/Urls";
import { getAccessToken } from "../config/AuthConfig";

class DeclineApi {

  static getDeclineReasons() {

    return fetch(DECLINE_REASON_REQUEST, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${getAccessToken()}`
      }
    })
    .then(response => {
      return response.json();
    });

  }

  static declineOffer(id, reasons) {

    return fetch(DECLINE_OFFER_REQUEST + id, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${getAccessToken()}`
      },
      body: JSON.stringify(reasons)
    })
    .then(response => {
      return response.json();
    });

  }

}

export default DeclineApi;
