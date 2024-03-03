import { API_BASE_URL_ENV } from "../common/common";
import BaseService from "./BaseService";

const apiEndpoint = API_BASE_URL_ENV() + "/offer";

export default class OfferService extends BaseService {
  constructor() {
    super(apiEndpoint);
  }
}
