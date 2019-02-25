import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Register from './Register/Register';

const RegisterRoutes = () => (
  <Switch>
    <Route exact path="/register" component={Register}/>
  </Switch>
)

export default RegisterRoutes;