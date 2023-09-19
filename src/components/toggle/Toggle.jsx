import React, { useState } from 'react';

const Toggle = () => {
    const [toggle, setToggle] = useState(true);

    alert(toggle);
  return (
    <>
     {
        toggle && (
            <p style={{margin: '20px', padding: '10px', backgroundColor: 'aquamarine', color: 'gray'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis incidunt iure, recusandae placeat reiciendis excepturi neque exercitationem repellat dolore sapiente?</p>
        )
     }

      <div style={{textAlign: 'center'}}>

        <button style={{backgroundColor: 'black', color: 'white', padding: '5px', 'marginLeft': '10px'}} onClick={() => setToggle(!toggle)}>{toggle ? 'Hide': 'Show'}</button>
      </div>
    </>
  )
}

export default Toggle;