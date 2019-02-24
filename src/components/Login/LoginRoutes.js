import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './Login';

const LoginRoutes = () => (
  <Switch>
    <Route exact path="/loginMe" component={Login}/>
  </Switch>
)

export default LoginRoutes;