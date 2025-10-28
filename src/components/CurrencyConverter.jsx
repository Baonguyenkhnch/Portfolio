import { useEffect, useState } from "react";

export default function CurrencyConverter() {
  const [usd, setUsd] = useState(1);
  const [vnd, setVnd] = useState(null);

  useEffect(() => {
    fetch("https://api.exchangerate.host/latest?base=USD&symbols=VND")
      .then((res) => res.json())
      .then((data) => {
        const rate = data.rates.VND;
        setVnd((usd * rate).toFixed(0));
      });
  }, [usd]);

  return (
    <div className="p-4 bg-slate-800 rounded-2xl shadow text-white">
      <h2 className="text-xl font-semibold mb-2">💱 Quy đổi tiền tệ</h2>
      <div className="flex gap-2 items-center">
        <input
          type="number"
          value={usd}
          onChange={(e) => setUsd(e.target.value)}
          className="p-2 rounded text-black"
        />
        <span>USD = {vnd ? vnd.toLocaleString() : "..."} VND</span>
      </div>
    </div>
  );
}
