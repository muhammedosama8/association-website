import { API_BASE_URL_ENV } from "../common/common";
import BaseService from "./BaseService";

const apiEndpoint = API_BASE_URL_ENV() + "/contactUs";

export default class ContactUsService extends BaseService {
  constructor() {
    super(apiEndpoint);
  }
}
