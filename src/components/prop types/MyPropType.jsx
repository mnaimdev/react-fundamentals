import React, { useState } from 'react';
import MyPropChild from './MyPropChild';

const MyPropType = () => {
    // const [name, setName] = useState('Mohammad Naim');
    // const [age, setAge] = useState(24);
    const [user, setUser] = useState({
        name: 'Anisul Islam',
        age: 24
    });
  return (
    <>
      <MyPropChild user={user} />
    </>
  )
}

export default MyPropType;