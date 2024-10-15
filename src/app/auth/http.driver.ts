import axios from "axios";
import { defineHttpDriver } from "vue-auth3";

export default defineHttpDriver({
  request: axios.create({
    baseURL: "https://localhost:7146",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer baboe!!`,
    },
  }),
});
