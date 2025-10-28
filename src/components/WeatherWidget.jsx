import { useEffect, useState } from "react";

export default function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`
      );
      const data = await res.json();
      setWeather(data.current_weather);
      setLoading(false);
    });
  }, []);

  if (loading) return <p className="text-white">Đang tải dữ liệu thời tiết...</p>;

  return (
    <div className="p-4 bg-slate-800 rounded-2xl shadow text-white">
      <h2 className="text-xl font-semibold mb-2">🌤 Thời tiết hiện tại</h2>
      <p>Nhiệt độ: {weather.temperature}°C</p>
      <p>Gió: {weather.windspeed} km/h</p>
    </div>
  );
}
