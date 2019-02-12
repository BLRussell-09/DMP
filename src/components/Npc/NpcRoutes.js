import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NpcPage from './NpcPage/NpcPage';

const NpcRoutes = () => (
  <Switch>
    <Route exact path="/" component={NpcPage}/>
  </Switch>
)

export default NpcRoutes;