import axios from "axios";

import { API_URL } from "../constants";

const show = () => axios.get(`${API_URL}/products/infinix-inbook-2`);

const productsApi = { show };

export default productsApi;
