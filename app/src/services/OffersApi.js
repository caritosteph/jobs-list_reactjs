import axios from "axios";
import { OFFERS_REQUEST, OFFER_REQUEST } from "../Utils/Urls";
import { getAccessToken } from "../Utils/AuthConfig";

class OffersApi {

  static getOffers() {

    return axios({
      method: "get",
      url: OFFERS_REQUEST,
      headers: {
        "Authorization": `Bearer ${getAccessToken()}`
      }
    })
    .then(response => {
      return response;
    });

  }

  static getOfferDetail(id) {

    return axios({
      method: "get",
      url: OFFER_REQUEST + id,
      headers: {
        "Authorization": `Bearer ${getAccessToken()}`
      }
    })
    .then(response => {
      return response;
    });
  }

}

export default OffersApi;
