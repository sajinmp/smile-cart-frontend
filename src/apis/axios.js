import axios from "axios";

import { API_URL } from "../constants";

const responseInterceptors = () => {
  axios.interceptors.response.use(response => response.data);
};

const setHttpHeaders = () => {
  axios.defaults.headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
};

export default function initializeAxios() {
  axios.defaults.baseURL = API_URL;
  setHttpHeaders();
  responseInterceptors();
}
