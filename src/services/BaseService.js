import http from './HttpService'

export default class BaseService {
  apiEndpoint;

  constructor(apiEndPoint) {
    this.apiEndpoint = apiEndPoint;
  }

  getList(params) {
    if(params){
      return http.get(this.apiEndpoint, {params});
    } else {
      return http.get(this.apiEndpoint);
    }
  }
  create(data) {
    return http.post(this.apiEndpoint, data);
  }
}
