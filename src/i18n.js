import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(languageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "ar"],
    fallbackLng: "en",
    detection: {
      // order and from where user language should be detected
      order: [
        "localStorage",
        "htmlTag",
        "cookie",
        "sessionStorage",
        "path",
        "subdomain",
      ],
      caches: ["localStorage", "cookie"],
    },
    backend: { loadPath: "/locales/{{lng}}/translation.json" },
  });
export default i18n;
