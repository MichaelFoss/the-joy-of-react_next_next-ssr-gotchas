'use client';
import React, { useEffect } from 'react';
import Spinner from '../Spinner';

function Counter() {
  const [count, setCount] = React.useState(null);

  useEffect(() => {
    const savedValue = Number(window.localStorage.getItem('saved-count'));
    setCount(savedValue || 0);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('saved-count', count);
  }, [count]);

  return (
    <button className="count-btn" onClick={() => setCount(count + 1)}>
      Count: {count === null ? <Spinner /> : count}
    </button>
  );
}

export default Counter;
