import React, { useState } from 'react';
import {Header} from '../components/index';
const Blogs = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
     <Header title="Blogs" />
      
    </div>
  );
}

export default Blogs
