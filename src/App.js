import React, { useState } from 'react';
import './App.css';

export default function Deposit() {
  const [deposit, setDeposit] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [period, setPeriod] = useState('');
  const [totalAmount, setTotalAmount] = useState(null);

  const handleCalculate = () => {
      if (!deposit || !interestRate || !period) {
      alert('Заполните все поля!');
      return;
      }

  const principal = parseFloat(deposit);
  const rate = parseFloat(interestRate) / 100;
  const months = parseInt(period);

  // Формула для простого процента
  const total = principal * (1 + rate * months / 12);
  setTotalAmount(total.toFixed(2));
};

  return (
      <div className="main">
          <h1>Депозитный калькулятор</h1>
          <div>
              <label className='label'>
              Сумма депозита:
              <input
                  className='input'
                  type="number"
                  value={deposit}
                  onChange={(e) => setDeposit(e.target.value)}
              />
              </label>
          </div>
          <div>
              <label className='label'>
              Процентная ставка (%):
              <input 
                  className='input'
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
              />
              </label>
          </div>
          <div>
              <label className='label'>
              Срок (месяцев):
              <input
                  className='input'
                  type="number"
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
              />
              </label>
          </div>
          <button className='btn' onClick={handleCalculate}>Рассчитать</button>
          {totalAmount && (
              <div>
              <h2>Итоговая сумма: {totalAmount} руб.</h2>
              </div>
          )}
      </div>
  );
}
