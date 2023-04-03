import axios from "axios";
const instance = axios.create({
  baseURL: "http://139.59.60.50",
});
export default instance;