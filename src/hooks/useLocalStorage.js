import { useState, useEffect } from 'react';

function useLocalStorage(key) {
  const [ value, setValue ] = useState(localStorage.getItem(key));

  useEffect(() => {

    if(value === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, value);
    }
  }, [value, key]);

  return [value, setValue];
}

export default useLocalStorage;