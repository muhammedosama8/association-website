import { API_BASE_URL_ENV } from "../common/common";
import BaseService from "./BaseService";

const apiEndpoint = API_BASE_URL_ENV() + "/BranchesAndMarkets";

export default class BranchesAndMarketsService extends BaseService {
  constructor() {
    super(apiEndpoint);
  }
}
