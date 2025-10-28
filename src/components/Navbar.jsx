import { Link } from "react-router-dom";
import i18n from "../i18n"; // 👈 import i18n
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();

  // 👇 Hàm đổi ngôn ngữ
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-slate-900 text-white shadow-lg">
      <div className="font-bold text-lg tracking-wide">BaoNguyen</div>

      <ul className="flex gap-6 text-sm font-medium">
        <li><Link to="/">{t("nav.home")}</Link></li>
        <li><Link to="/project">{t("nav.project")}</Link></li>
        <li><Link to="/about">{t("nav.about")}</Link></li>
        <li><Link to="/weather">{t("nav.weather")}</Link></li>
        <li><Link to="/currency">{t("nav.currency")}</Link></li>
      </ul>

      {/* 👇 nút chuyển ngôn ngữ */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleLanguageChange("en")}
          className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 text-sm transition"
        >
          🇺🇸 EN
        </button>
        <button
          onClick={() => handleLanguageChange("vi")}
          className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 text-sm transition"
        >
          🇻🇳 VI
        </button>
      </div>
    </nav>
  );
}
