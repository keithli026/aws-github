import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from "../translationEN.json";
import translationTC from "../translationTC.json";
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
    lng: "en",
    returnObjects: true,
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    // resources: {
    //   en: {
    //     translation: translationEN
    //   },
    //   tc: {
    //     translation: translationTC
    //   }
    // },
  });

export default i18n;