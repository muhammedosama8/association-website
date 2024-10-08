import { API_BASE_URL_ENV } from "../common/common";
import BaseService from "./BaseService";

const apiEndpoint = API_BASE_URL_ENV() + "/news";

export default class NewsService extends BaseService {
  constructor() {
    super(apiEndpoint);
  }
}
