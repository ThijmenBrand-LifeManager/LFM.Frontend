import axios from "axios";
import { defineHttpDriver } from "vue-auth3";

export default defineHttpDriver({
  request: axios.create({
    baseURL: import.meta.env.VITE_AUTH_API_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer baboe!!`,
    },
  }),
});
