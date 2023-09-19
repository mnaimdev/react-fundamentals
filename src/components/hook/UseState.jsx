import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { GoAlertFill } from "react-icons/go";

const UseState = () => {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("skyblue");

    const [car, setCar] = useState(
        {
          color: 'red',
          brand: 'BMW',
          price: '1000M',
        }
      );


    const handleCount = () => {
        // setCount(count + 1); // 0 + 1 = 1
        // setCount(count + 1); // 0 + 1 = 1
        // setCount(count + 1); // 0 + 1 = 1

        setCount((prevCount) => prevCount + 1 ); // 0 + 1 = 1
        setCount((x) => x + 1 ); // 1 + 1 = 2
        setCount((x) => x + 1 ); // 2 + 1 = 3
    }

    const handleColor = () => {
      setColor("blue");
    }


    const handleDetails = () => {
      setCar({
          color: 'dark',
          brand: 'Toyota',
          price: '10M',
        }
      );
    }
    
  return (
    <>
        <p>{count}</p>
        <button onClick={handleCount}>+</button>
        <br />
        <p>{color}</p>
        <button onClick={handleColor}>Change Color</button>

        <div>
          <p>The car name is {car.brand}, price {car.price} & color {car.color}</p>

          <Button variant="dark" onClick={handleDetails}>
            <GoAlertFill />
             <span className="ms-1">Change Details</span></Button>
        </div>
    </>
  )
}

export default UseState;