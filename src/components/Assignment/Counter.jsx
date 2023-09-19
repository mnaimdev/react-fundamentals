import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {

    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount((prevCount) => prevCount + 1);
    }

    const decrementCount = () => {
        setCount((prevCount) => prevCount - 1);
    }

    const resetCount = () => {
        setCount(0);
    }

    
  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          {
            count < 5 ? <button className="btn card__btn" onClick={incrementCount}>+</button> : <button className="disabled">+</button>
          }

         {
             count > -5 ? <button className="btn card__btn" onClick={decrementCount}>-</button> : <button className="disabled">-</button>
         }

          <button className="btn card__btn" onClick={resetCount}>0</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;