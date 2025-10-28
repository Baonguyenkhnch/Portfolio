import React, { useState } from "react";
import { ArrowRightLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CurrencyConverter() {
  const { t } = useTranslation();
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("VND");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
    setResult("");
    setError("");
  };

  const handleConvert = async () => {
    if (!amount || parseFloat(amount) <= 0) {
      setError(t("currency.error_invalid"));
      setResult("");
      return;
    }

    try {
      const res = await fetch(`https://open.er-api.com/v6/latest/${from}`);
      const data = await res.json();

      if (data?.rates?.[to]) {
        const rate = data.rates[to];
        const converted = (parseFloat(amount) * rate).toLocaleString("en-US", {
          maximumFractionDigits: 2,
        });
        setResult(`${converted} ${to}`);
        setError("");
      } else {
        setError(t("currency.error_not_found"));
        setResult("");
      }
    } catch {
      setError(t("currency.error_api"));
      setResult("");
    }
  };
  return (
  <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-950 via-blue-900 to-purple-900">
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-10 w-full max-w-md sm:max-w-lg mx-4 text-white">
      {/* Tiêu đề */}
      <h2 className="text-3xl font-bold text-center mb-2">
        💱 {t("currency.title")}
      </h2>
      <p className="text-center text-white/70 mb-8">
        {t("currency.subtitle")}
      </p>

      {/* Form */}
      <div className="space-y-6">
        {/* Nhập số tiền */}
        <div>
          <label className="block text-sm font-medium mb-2">
            {t("currency.amount")}
          </label>
          <div className="flex gap-3">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="flex-1 bg-white/20 border border-white/30 text-white px-5 py-3 rounded-xl placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="0.00"
            />
            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="bg-white/20 border border-white/30 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              <option value="USD">USD</option>
              <option value="VND">VND</option>
              <option value="EUR">EUR</option>
              <option value="JPY">JPY</option>
            </select>
          </div>
        </div>

        {/* Nút hoán đổi */}
        <div className="flex justify-center">
          <button
            onClick={handleSwap}
            className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-transform duration-300 hover:rotate-180"
          >
            <ArrowRightLeft size={22} className="text-white" />
          </button>
        </div>

        {/* Chuyển sang */}
        <div>
          <label className="block text-sm font-medium mb-2">
            {t("currency.to")}
          </label>
          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full bg-white/20 border border-white/30 text-white px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            <option value="USD">USD</option>
            <option value="VND">VND</option>
            <option value="EUR">EUR</option>
            <option value="JPY">JPY</option>
          </select>
        </div>

        {/* Nút chuyển đổi */}
        <button
          onClick={handleConvert}
          className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold py-4 rounded-xl hover:scale-105 transition-transform duration-200 shadow-lg shadow-pink-500/20"
        >
          {t("currency.convert")}
        </button>
      </div>

      {/* Kết quả */}
      {error && (
        <p className="text-red-400 text-center mt-5 text-sm font-medium">
          {error}
        </p>
      )}
      {result && (
        <div className="text-center mt-6 text-xl font-semibold text-white animate-fade-in">
          {t("currency.result")}: <span className="text-pink-400">{result}</span>
        </div>
      )}
    </div>
  </div>
);



}
