import React from 'react';
import { Switch, Route } from 'react-router-dom'
import {Blog, Blogs,CreateBlog,Login} from '../views/index';

const Routes = () => {
  return (
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/blogs' component={Blogs} />
        <Route exact path='/createblog' component={CreateBlog} />
        <Route exact path='/blog/:id' component={Blog} />

      </Switch>
  );
}

export default Routes;
