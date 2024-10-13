import { createApp } from "vue";
import "./assets/style/main.scss";
import App from "./App.vue";
import router from "./pages/routes";
import { VueQueryPlugin } from "@tanstack/vue-query";

createApp(App).use(router).use(VueQueryPlugin).mount("#app");
