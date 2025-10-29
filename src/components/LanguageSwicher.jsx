// src/components/LanguageSwitcher.jsx
import React from "react";
import i18n from "../i18n"; // 👈 đường dẫn tới file i18n của bạn

const LanguageSwitcher = () => {
  const switchLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng); // 👈 lưu vào localStorage
  };

  return (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <button onClick={() => switchLanguage("en")}>🇺🇸 English</button>
      <button onClick={() => switchLanguage("vi")}>🇻🇳 Tiếng Việt</button>
    </div>
  );
};

export default LanguageSwitcher;
