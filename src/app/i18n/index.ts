import { createI18n } from "vue-i18n";
import datetime from "./rules/datetime";
import en from "./locales/en.json";
import nl from "./locales/nl.json";

const i18n = createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false,
  globalInjection: true,
  datetime,
  messages: {
    en,
    nl,
  },
});

export default i18n;
