import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang); // 🔥 Lưu lại ngôn ngữ được chọn
  };

  const currentLang = i18n.language || "vi";

  return (
    <nav className="flex items-center justify-between p-4 bg-slate-900 text-white shadow-lg">
      <div className="font-bold text-lg tracking-wide text-emerald-400">
        BaoNguyen
      </div>

      <ul className="flex gap-6 text-sm font-medium">
        <li>
          <Link to="/">{t("appHeader.home")}</Link>
        </li>
        <li>
          <Link to="/project">{t("appHeader.project")}</Link>
        </li>
        <li>
          <Link to="/about">{t("appHeader.about")}</Link>
        </li>
        <li>
          <Link to="/weather">{t("appHeader.Weather")}</Link>
        </li>
        <li>
          <Link to="/currency">{t("appHeader.currency")}</Link>
        </li>
      </ul>

      {/* 🌐 nút chuyển ngôn ngữ */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleLanguageChange("en")}
          className={`px-3 py-1 rounded-md text-sm transition ${
            currentLang === "en"
              ? "bg-pink-500 text-white"
              : "bg-white/10 hover:bg-white/20"
          }`}
        >
          🇺🇸 EN
        </button>
        <button
          onClick={() => handleLanguageChange("vi")}
          className={`px-3 py-1 rounded-md text-sm transition ${
            currentLang === "vi"
              ? "bg-pink-500 text-white"
              : "bg-white/10 hover:bg-white/20"
          }`}
        >
          🇻🇳 VI
        </button>
      </div>
    </nav>
  );
}
