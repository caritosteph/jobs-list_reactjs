
import "whatwg-fetch";
import { OFFERS_REQUEST, OFFER_REQUEST } from "../../config/Urls";
import { getAccessToken } from "../../config/AuthConfig";

class OffersApi {
  static getOffers() {

    return fetch(OFFERS_REQUEST, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${getAccessToken()}`
      }
    })
    .then(response => {
      return response.json();
    });

  }

  static getOfferDetail(id) {

    return fetch(OFFER_REQUEST + id, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${getAccessToken()}`
      }
    })
    .then(response => {
      return response.json();
    });

  }

}

export default OffersApi;