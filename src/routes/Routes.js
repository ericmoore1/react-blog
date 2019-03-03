import React from 'react';
import { Switch, Route } from 'react-router-dom'
import {Login, Blogs} from '../views/index';

const Routes = () => {
  return (
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/blogs' component={Blogs} />
      </Switch>
  );
}

export default Routes;
