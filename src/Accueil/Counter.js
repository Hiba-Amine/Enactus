import React, { useState, useEffect } from 'react';

export default function Counter({ end, duration = 2000, color, fontSize = '32px' }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 2);
    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 10);
    return () => clearInterval(counter);
  }, [end, duration]);

  return (
    <span style={{ fontSize, fontWeight: 'bold', color }}>
      {count}
    </span>
  );
}