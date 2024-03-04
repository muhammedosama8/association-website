import { API_BASE_URL_ENV } from "../common/common";
import BaseService from "./BaseService";
import http from './HttpService'

const apiEndpoint = API_BASE_URL_ENV() + "/staticPage";

export default class StaticPagesServices extends BaseService {
    constructor() {
        super(apiEndpoint);
    }

    getList(params) {
        return http.get(apiEndpoint,{params});
        
    }
}
