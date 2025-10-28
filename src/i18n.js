import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// Khởi tạo i18n
i18n
  .use(Backend) // tải file dịch từ server (public/locales)
  .use(LanguageDetector) // tự phát hiện ngôn ngữ trình duyệt
  .use(initReactI18next) // kết nối với react-i18next
  .init({
    debug: false,
    fallbackLng: 'en', // nếu không tìm thấy file dịch thì dùng tiếng Anh
    lng: 'vi', // ngôn ngữ mặc định (có thể đổi sang 'en')
    interpolation: {
      escapeValue: false, // React đã tự escape
    },
    backend: {
      // vị trí chứa file dịch JSON
      loadPath: '/locales/{{lng}}/translation.json',
    },
    detection: {
      order: ['querystring', 'localStorage', 'cookie', 'navigator'], // thứ tự phát hiện
      caches: ['localStorage', 'cookie'], // lưu ngôn ngữ đã chọn
    },
  });

export default i18n;
