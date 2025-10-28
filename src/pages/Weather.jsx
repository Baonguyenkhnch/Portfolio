import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Spinner from "react-bootstrap/Spinner";
import "../styles/Weather.scss";

function WeatherPage() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (latitude, longitude, cityName = "") => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`
      );
      const data = await res.json();
      setWeather(data);
      if (cityName) setCity(cityName);
      else {
        const locRes = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=vi`
        );
        const locData = await locRes.json();
        setCity(locData.city || locData.locality || "Không rõ vị trí");
      }
      setError(null);
    } catch (err) {
      setError("Không lấy được dữ liệu thời tiết!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        fetchWeather(latitude, longitude);
      },
      () => setError("Không thể lấy vị trí hiện tại!")
    );
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      setLoading(true);
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=1&language=vi&format=json`
      );
      const geoData = await geoRes.json();

      if (geoData.results && geoData.results.length > 0) {
        const cityData = geoData.results[0];
        fetchWeather(cityData.latitude, cityData.longitude, cityData.name);
      } else {
        setError("Không tìm thấy thành phố này!");
      }
    } catch {
      setError("Lỗi khi tìm kiếm thành phố!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-page">
      <h1>🌤 Dự báo thời tiết</h1>

      <form onSubmit={handleSearch} className="weather-search">
        <input
          type="text"
          placeholder="Nhập tên thành phố..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Xem</button>
      </form>

      {loading && (
        <div className="loading">
          <Spinner animation="border" role="status" />
        </div>
      )}

      {error && <p className="text-danger">{error}</p>}

      {!loading && weather && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="weather-card"
        >
          <h2>{city ? `📍 ${city}` : "Vị trí hiện tại"}</h2>
          <p className="temp">{weather.current_weather.temperature}°C</p>
          <p className="wind">💨 Gió: {weather.current_weather.windspeed} km/h</p>
          <p>
            🌡️ Max: {weather.daily.temperature_2m_max[0]}°C / Min:{" "}
            {weather.daily.temperature_2m_min[0]}°C
          </p>
        </motion.div>
      )}
    </div>
  );
}

export default WeatherPage;
