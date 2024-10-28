import { createAuth } from "vue-auth3";
import bearerDriver from "./bearer.driver";
import httpDriver from "./http.driver";
import router from "@/pages/routes";

const auth = createAuth({
  plugins: {
    router,
  },
  drivers: {
    auth: bearerDriver,
    http: httpDriver,
  },
  loginData: {
    url: "auth/login",
    method: "POST",
    redirect: "/",
    fetchUser: true,
    staySignedIn: true,
  },
  fetchData: {
    url: "users/me",
    method: "GET",
    enabled: true,
  },
});

export default auth;
