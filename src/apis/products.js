import axios from "axios";

const index = () => axios.get("products");

const show = slug => axios.get(`products/${slug}`);

const productsApi = { index, show };

export default productsApi;
