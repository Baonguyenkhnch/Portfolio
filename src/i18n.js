import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"; // 👈 thêm dòng này

import en from "./locales/en/translation.json";
import vi from "./locales/vi/translation.json";

i18n
  .use(LanguageDetector) // 👈 cho phép tự phát hiện hoặc lấy từ localStorage
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      vi: { translation: vi },
    },
    fallbackLng: "en", // 👈 nếu chưa chọn thì mặc định là English
    interpolation: { escapeValue: false },
    detection: {
      // 👇 setup cách phát hiện ngôn ngữ
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"], // 👈 lưu ngôn ngữ được chọn
    },
  });

export default i18n;
