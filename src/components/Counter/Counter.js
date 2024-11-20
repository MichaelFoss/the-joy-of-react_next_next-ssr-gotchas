'use client';
import React, { useEffect } from 'react';

function Counter() {
  const [count, setCount] = React.useState();

  useEffect(() => {
    const savedValue = Number(window.localStorage.getItem('saved-count'));
    if (!!savedValue) {
      setCount(savedValue);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('saved-count', count);
  }, [count]);

  return (
    <button className="count-btn" onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

export default Counter;
