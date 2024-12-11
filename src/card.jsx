import React, { useState } from 'react';
import './App.css';

export default function Card() {
    const [quantity, setQuantity] = useState(100); // количество визиток
    const [pricePerCard, setPricePerCard] = useState(5); // цена за одну визитку
    const [lamination, setLamination] = useState(false); // ламинирование
    const [doubleSided, setDoubleSided] = useState(false); // печать с двух сторон
    const [total, setTotal] = useState(0); // итоговая стоимость

const calculateTotal = () => {
    let basePrice = quantity * pricePerCard;

    if (lamination) {
        basePrice += quantity * 5; 
    }

    if (doubleSided) {
        basePrice += quantity * 7; 
    }

    setTotal(basePrice);
};

    return (
        <div className="card_main">
        <h1>Калькулятор визиток</h1>
        <div>
            <label className='card_main_label'>
            Количество визиток:
            <input
                className='card_main_input'
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                min="1"
            />
            </label>
        </div>
        <div>
            <label className='card_main_label'>
            Цена за одну визитку (₽):
            <input
                className='card_main_input'
                type="number"
                value={pricePerCard}
                onChange={(e) => setPricePerCard(Number(e.target.value))}
                min="1"
            />
            </label>
        </div>
        <div>
            <label className='card_main_label'>
            <input
                className='card_main_input'
                type="checkbox"
                checked={lamination}
                onChange={(e) => setLamination(e.target.checked)}
            />
            Ламинирование (+5 ₽ за визитку)
            </label>
        </div>
        <div>
            <label>
            <input
                type="checkbox"
                checked={doubleSided}
                onChange={(e) => setDoubleSided(e.target.checked)}
            />
            Печать с двух сторон (+7 ₽ за визитку)
            </label>
        </div>
        <button onClick={calculateTotal}>Рассчитать</button>
        <h2>Итоговая стоимость: {total} ₽</h2>
        </div>
    );
}
