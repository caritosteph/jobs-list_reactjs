
import "whatwg-fetch";
import { offersRequest } from "../../configs/Urls";

class OffersApi {
  static getOffers (token) {
    return fetch(offersRequest, {
      method: "GET",
      headers: {
        "Authorization": "Bearer "+ token,
        "Content-Type": "application/json"
      }
    })
    .then(response => {
      return response.json();
    });
  }
}

export default OffersApi;
