import React, { useState } from 'react';
import useFetch from '../custom hook/useFetch';

const loadingMessage = 'Loading...';

const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            if (!res.ok) {
                throw Error('Data not found. Please check your api');
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
        {isLoading && loadingMessage}
        <p>{count}</p>
        <button onClick={() => setCount(count => count + 1)}>+</button>
        <br />

        {error && <span style={{color: 'red'}}>{error}</span>}

        {   data.map((item) => {
            return <p key={item.id} style={{margin: '10px'}}>{item.id}<span>. </span>{item.title}</p>
        })
    }
    </>
    
  )
}

// const UseEffect = () => {
//     const [count, setCount] = useState(0);
//     const [data, isLoading, error] = useFetch('https://jsonplaceholder.typicode.com/posts');

//   return (
//     <>
//         {isLoading && loadingMessage}
//         <p>{count}</p>
//         <button onClick={() => setCount(count => count + 1)}>+</button>
//         <br />

//         {error && <span style={{color: 'red'}}>{error}</span>}

//         {   data.map((item) => {
//             return <p key={item.id} style={{margin: '10px'}}>{item.id}<span>. </span>{item.title}</p>
//         })
//     }
//     </>
    
//   )
// }




export default UseEffect;