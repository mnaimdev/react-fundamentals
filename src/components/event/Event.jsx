import React, { useState } from 'react';

const Event = () => {

    const [input, setInput] = useState("");

   const handleClick = () => {
    alert(input);
   }


   const handleChange = (e) => {
        setInput(e.target.value);
   }

  return (
    <>
    <input type="text" onChange={(e) => handleChange(e)} />
        <button onClick={handleClick} className='btn btn-dark mt-5 ms-5'>Click</button>
        <br />
        <p>{input}</p>
    </>
  )
}

export default Event;