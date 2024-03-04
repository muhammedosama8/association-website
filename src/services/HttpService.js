import axios from "axios";

axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";

const obj = {
  get: axios.get,
  post: axios.post
}
export default obj;