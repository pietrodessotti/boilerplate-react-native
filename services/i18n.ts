import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../locales/en.json";
import pt from "../locales/pt.json";
import es from "../locales/es.json";

function translate(language: Object) {
  return {
    translation: language
  }
}

const languages = {
  en: translate(en),
  es: translate(es),
  pt: translate(pt) 
}

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  interpolation: { escapeValue: false },
  lng: "en",
  fallbackLng: 'en',
  resources: languages
});

export default i18n;