import React, { useState } from "react";
import { ArrowRightLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function CurrencyConverter() {
  const { t } = useTranslation(); // 👈 dùng hàm t()
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("VND");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleConvert = async () => {
    if (!amount || parseFloat(amount) <= 0) {
      setError(t("currency.error_invalid"));
      setResult("");
      return;
    }

    try {
      const res = await fetch(`https://open.er-api.com/v6/latest/${from}`);
      const data = await res.json();

      if (data && data.rates && data.rates[to]) {
        const rate = data.rates[to];
        const converted = (parseFloat(amount) * rate).toLocaleString("en-US");
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
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-10 w-full max-w-lg border border-white/20">
        <h2 className="text-4xl font-bold text-center mb-2 text-white">
          {t("currency.title")}
        </h2>
        <p className="text-center text-white/70 mb-8 text-sm">
          {t("currency.subtitle")}
        </p>

        {/* input */}
        <div className="space-y-6">
          <div>
            <label className="block text-white/90 text-sm font-medium mb-2">
              {t("currency.amount")}
            </label>
            <div className="flex gap-3">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="flex-1 bg-white/20 border border-white/30 text-white px-5 py-3 rounded-xl"
                placeholder="0.00"
              />
              <select
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="bg-white/20 border border-white/30 text-white px-4 py-3 rounded-xl"
              >
                <option value="USD">USD</option>
                <option value="VND">VND</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white/20 p-3 rounded-full">
              <ArrowRightLeft size={24} className="text-white" />
            </div>
          </div>

          <div>
            <label className="block text-white/90 text-sm font-medium mb-2">
              {t("currency.to")}
            </label>
            <select
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full bg-white/20 border border-white/30 text-white px-5 py-3 rounded-xl"
            >
              <option value="USD">USD</option>
              <option value="VND">VND</option>
              <option value="EUR">EUR</option>
            </select>
          </div>

          <button
            onClick={handleConvert}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 rounded-xl hover:scale-105 transition"
          >
            {t("currency.convert")}
          </button>
        </div>

        {error && <p className="text-red-400 text-center mt-5">{error}</p>}
        {result && (
          <div className="text-center mt-5 text-white text-xl font-semibold">
            {t("currency.result")}: {result}
          </div>
        )}
      </div>
    </div>
  );
}
