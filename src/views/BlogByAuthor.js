import React, { useState } from 'react';
import { useHttp } from '../custhooks';
const URL = process.env.REACT_APP_API_HOST + '/read/blogs';
const Test = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [isLoading,fetchedData] = useHttp(URL,[]);
  const data = !fetchedData ?  [] : fetchedData;
  console.log(data);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

      <button onClick={() => setCount(count - 1)}>
        minus
      </button>
    </div>
  );
}

export default Test
