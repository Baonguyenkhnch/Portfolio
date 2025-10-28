import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;
          const res = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`
          );
          const data = await res.json();
          setWeather(data.current_weather);
        } catch {
          setError(t("weather.error") || "Không thể tải dữ liệu thời tiết!");
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError(t("weather.noLocation") || "Không thể truy cập vị trí!");
        setLoading(false);
      }
    );
  }, [t]);

  if (loading)
    return <p className="text-gray-300">{t("weather.loading") || "Đang tải dữ liệu thời tiết..."}</p>;

  if (error)
    return <p className="text-red-400">{error}</p>;

  return (
    <div className="p-4 bg-slate-800 rounded-2xl shadow text-white text-center">
      <h2 className="text-xl font-semibold mb-2">🌤 {t("weather.current") || "Thời tiết hiện tại"}</h2>
      <p>🌡️ {t("weather.temp") || "Nhiệt độ"}: {weather.temperature}°C</p>
      <p>💨 {t("weather.wind") || "Gió"}: {weather.windspeed} km/h</p>
    </div>
  );
}
