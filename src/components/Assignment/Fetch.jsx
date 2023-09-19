import React, { useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Fetch = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            if (!res.ok) {
                throw Error(toast.error('Data not found. Please check your api', {
                    position: toast.POSITION.TOP_RIGHT
                }));
            }
            return res.json()
        })
        .then((value) => {
            setData(value);
            setIsLoading(false);
            setError(null);
        })
        .catch((err) => {
            setError(err.message);
            setIsLoading(false);
        })
        
      }, 4000);
    }, []);


  return (
    <>
        {isLoading && <p>Loading...</p>}
        
        {error && <span style={{color: 'red'}}>{error}</span>}

        {   data.map((item) => {
            return (
                <>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div key={item.id} style={{backgroundColor: 'black', color: 'white', padding: '5px', margin: '5px', width: '100px'}}>
                            <p key={item.id} style={{margin: '10px'}}>{item.id}<span>. </span>{item.title}</p>
                        </div>
                    </div>
                </>
            )
        })
        }

        <ToastContainer />

    </>
  )
}


export default Fetch;