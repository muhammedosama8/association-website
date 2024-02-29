import { API_BASE_URL_ENV } from "../common/common";
import BaseService from "./BaseService";

const apiEndpoint = API_BASE_URL_ENV() + "/ActivitiesAndEvents";

export default class ActivitiesAndEventsService extends BaseService {
  constructor() {
    super(apiEndpoint);
  }
}
