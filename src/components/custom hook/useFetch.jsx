import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      setTimeout(() => {
        fetch(url)
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
    }, [url]);

    return [data, isLoading, error];
}

export default useFetch;