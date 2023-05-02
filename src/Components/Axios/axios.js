import axios from "axios";
const instance = axios.create({
  // baseURL: "http://139.59.60.50:8000",
  baseURL: "http://139.59.60.50",
  // baseURL: "http://127.0.0.1:8000",

});
export default instance;