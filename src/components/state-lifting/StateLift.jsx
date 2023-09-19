import React from 'react';

const StateLift = (props) => {
    
    const data = {
        name: 'Mohammad Naim',
        age: 24,
        profession: 'Software Engineer'
    }

    props.onData(data);


  return (
    <>
        <h3>Child Component</h3>
        <p>{props.value}</p>
    </>
  )
}

export default StateLift;