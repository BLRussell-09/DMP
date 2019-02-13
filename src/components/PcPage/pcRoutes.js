import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PcPage from './PcPage';
import AddPc from './Add/AddPc';
import SinglePc from './SinglePc/SinglePc';
import NpcPage from '../Npc/NpcPage/NpcPage';

const PcRoutes = () => (
  <Switch>
    <Route exact path="/pc" component={PcPage}/>
    <Route exact path="/pc/add" component={AddPc}/>
    <Route path="/pc/:id" component={SinglePc}/>
    <Route path="/" component={NpcPage} />
  </Switch>
)

export default PcRoutes;