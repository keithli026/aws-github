import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  .use(Backend)
  .init({
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    debug: true,
    fallbackLng: "en",
    ns: ['common','translation'], // Define your namespaces
    // lng: "en",
    returnObjects: true,
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to your translation files
    },
    supportedLngs: ['en', 'tc'], // Add supported languages
  });

export default i18n;