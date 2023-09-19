import React, { useEffect, useState } from 'react';
import './dynamic.css';

const DynamicStyle = () => {
    const [validInput, setValidInput] = useState("");
    const [errorInput, setErrorInput] = useState(true);

    const handleInput = (e) => {
        setValidInput(e.target.value);
    }

    useEffect(() => {
        if (validInput.length < 2) {
            setErrorInput(true);
        } else {
            setErrorInput(false);
        }
    }, [validInput]);

    const error = true;
  return (
    <div>
        <p style={{color: error ? 'red': 'green'}}>Hey Everybody</p>

        <input type="text"
        value={validInput} 
        onChange={handleInput} 
        // style={{backgroundColor: errorInput ? 'red': 'green'}}
        className={errorInput ? 'invalid': 'valid'}
        />
    </div>
  )
}

export default DynamicStyle;