import React ,{useState } from 'react';

import './App.css';
import './css/main.min.css';
import { Header , LinkBar } from './components';
import {useHttp} from './custhooks';
import Routes from './routes/Routes';
import {LoginContext} from './contexts';
require('dotenv').config();

const URL = process.env.REACT_APP_API_HOST;
const getObject = {
  method : 'POST',
  credentials : 'include',
  mode : 'cors'
}
const App =() => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <LoginContext.Provider
      value={{
        loggedIn : false,
        setUserLogin : setIsLoggedIn
      }}
    >
    <div className="App">
    <Header title={"Appname"} children={<LinkBar bool={isLoggedIn}/>}/>
    <Routes />
    </div>
    </LoginContext.Provider>
  )

}

export default App;
