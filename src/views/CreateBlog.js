import React, { useState } from 'react';
import {Header} from '../components/index';
import {LoginAPI} from '../api/index';
const CreateBlog = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  // so component will not keep mounting.
  if(count === 0){
    setCount(1);
    LoginAPI.login({ email : "", password : ""})
        .then( json => {
          if(!("success" in json)){window.location = '/blogs'}
        })
        .catch( err => console.log( "ERROR: ", err ));
  }

  return (
    <div>
     <Header title="Create Blog" />

     <div>

     </div>
    </div>
  );
}

export default CreateBlog
