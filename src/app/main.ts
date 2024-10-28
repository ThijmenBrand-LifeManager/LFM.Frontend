import { createApp } from "vue";
import "./style/main.scss";
import App from "./App.vue";
import router from "../pages/routes";
import { VueQueryPlugin } from "@tanstack/vue-query";
import PrimeVue from "primevue/config";
import auth from "./auth/authExtension";

const app = createApp(App);
app.use(router);
app.use(auth);
app.use(VueQueryPlugin);
app.use(PrimeVue, {
  theme: {
    preset: "Aura",
  },
});

app.mount("#app");
