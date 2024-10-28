import { createApp } from "vue";
import App from "./App.vue";
import router from "../pages/routes";
import { VueQueryPlugin } from "@tanstack/vue-query";
import PrimeVue from "primevue/config";
import auth from "./auth/authExtension";
import i18n from "./i18n";

import LfmTheme from "./style/lfm_theme";

import "./style/main.scss";

const app = createApp(App);
app.use(router);
app.use(auth);
app.use(PrimeVue, {
  theme: {
    preset: LfmTheme,
    options: {
      darkModeSelector: ".app-dark",
    },
  },
});
app.use(i18n);
app.use(VueQueryPlugin, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        retry: 1,
      },
    },
  },
});

app.mount("#app");
