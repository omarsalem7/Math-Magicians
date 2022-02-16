import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [data, setData] = useState({
    total: '0',
    next: null,
    operation: null,
  });
  const btns = [
    'AC',
    '+/-',
    '%',
    '÷',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
    '=',
  ];

  const clikHandler = (e) => {
    if (!e.target.name) return;

    const { next, total, operation } = calculate(data, e.target.name);

    if (next === null && total === null) {
      setData({ ...data, total: '0' });
    } else {
      setData({ next, total, operation });
    }
  };
  const { total, next } = data;
  return (
    <div>
      {next ? (
        <div className="output-screen">{next}</div>
      ) : (
        <div className="output-screen">{total}</div>
      )}
      <div className="btn-rows">
        {btns.map((btnName) => (
          <button
            onClick={clikHandler}
            name={btnName}
            type="button"
            className={`btn ${btnName === '0' ? 'btn-zero' : ''} ${
              btnName === '=' ? 'btn-equal' : ''
            }`}
            key={btnName}
          >
            {btnName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
