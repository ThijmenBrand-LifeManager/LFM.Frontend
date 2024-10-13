import axios, { Axios } from "axios";

const Api = axios.create({
  baseURL: import.meta.env.VITE_AUTH_API_URL,
});
