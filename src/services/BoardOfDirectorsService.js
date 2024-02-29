import { API_BASE_URL_ENV } from "../common/common";
import BaseService from "./BaseService";

const apiEndpoint = API_BASE_URL_ENV() + "/BoardOfDirectors";

export default class BoardOfDirectorsService extends BaseService {
  constructor() {
    super(apiEndpoint);
  }
}
