import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('');
  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => setQuote(data.slip.advice));
  }, []);

  return <div>{quote}</div>;
};

export default Quote;
