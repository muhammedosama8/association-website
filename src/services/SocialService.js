import { API_BASE_URL_ENV } from "../common/common";
import BaseService from "./BaseService";

const apiEndpoint = API_BASE_URL_ENV() + "/setting";

export default class SocialService extends BaseService {
  constructor() {
    super(apiEndpoint);
  }
}
