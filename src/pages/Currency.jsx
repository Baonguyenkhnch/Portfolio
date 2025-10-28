import { useState } from 'react'
import './Currency.scss'

const Currency = () => {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('VND')
  const [result, setResult] = useState('')

  // tỷ giá tạm thời (có thể thay bằng API thật sau)
  const rates = {
    USD: 1,
    VND: 25000,
    EUR: 0.92,
    JPY: 150,
  }

  const handleConvert = () => {
    if (isNaN(amount) || amount <= 0) {
      setResult('Vui lòng nhập số tiền hợp lệ!')
      return
    }

    const usdValue = amount / rates[from] // đổi về USD trước
    const converted = usdValue * rates[to]

    setResult(
      `${amount.toLocaleString()} ${from} = ${converted.toLocaleString(undefined, {
        maximumFractionDigits: 2,
      })} ${to}`
    )
  }

  return (
    <div className="currency-container">
      <h1>Chuyển đổi tiền tệ</h1>

      <div className="convert-section">
        <input
          type="number"
          placeholder="Nhập số tiền"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
        <select value={from} onChange={(e) => setFrom(e.target.value)}>
          <option value="USD">USD</option>
          <option value="VND">VND</option>
          <option value="EUR">EUR</option>
          <option value="JPY">JPY</option>
        </select>
        <button onClick={handleConvert}>Chuyển đổi</button>
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          <option value="USD">USD</option>
          <option value="VND">VND</option>
          <option value="EUR">EUR</option>
          <option value="JPY">JPY</option>
        </select>
      </div>

      {result && <div className="result-section">{result}</div>}
    </div>
  )
}

export default Currency
