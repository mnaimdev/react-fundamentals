import React, { useContext } from 'react';
import { userContext } from '../../App';

const Component4 = () => {
  const {person, count} = useContext(userContext);
 
  
  return (
    <div>
        <p>Name: {person.name}</p>
        <p>Age: {person.age}</p>
        <p>Total count: {count}</p>
    </div>
  )
}

export default Component4;