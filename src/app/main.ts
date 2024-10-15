import { createApp } from "vue";
import "./style/main.scss";
import App from "./App.vue";
import router from "../pages/routes";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { createAuth } from "vue-auth3";
import bearerDriver from "./auth/bearer.driver";
import httpDriver from "./auth/http.driver";

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

createApp(App).use(router).use(auth).use(VueQueryPlugin).mount("#app");
