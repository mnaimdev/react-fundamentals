import React, { useState } from 'react'
import Component2 from './Component2';
import { userContext } from '../../App';

const Component1 = () => {
    const [count, setCount] = useState(0);
    const [person, setPerson] = useState({
      name: 'Mohammad Naim',
      age: 24,
    });

  return (
    <>
      <userContext.Provider value={{count, person}}>
        <h3>Component 1</h3>
        <Component2 />
      </userContext.Provider>
    </>
  )
}

export default Component1;