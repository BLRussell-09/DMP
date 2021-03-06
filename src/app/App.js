import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Navibar from '../components/Navibar/Navibar';
import firebase from 'firebase';
import firebaseApp from '../firebase_requests/connection';
import auth from '../firebase_requests/auth';
import './App.css';
import PcRoutes from '../components/PcPage/pcRoutes';
import NpcRoutes from '../components/Npc/NpcRoutes';
import LoginRoutes from '../components/Login/LoginRoutes';
import RegisterRoutes from '../components/Register/registerRoutes';
import Register from '../components/Register/Register/Register';

firebaseApp();

class App extends Component {
  state = { authed: false };

  componentDidMount()
  {
    this.removeListener = firebase.auth().onAuthStateChanged((user) =>
    {
      if (user)
      {
        this.setState({authed: true});
      }
      else
      {
        this.setState({authed: false});
      }
    });
  };

  logout = () =>
  {
    this.setState({authed: false});
    auth.logoutUser();
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navibar authed={this.state.authed} logout={this.logout}/>
            <Container fluid>
              <div>
                <Switch>
                  <Route component={LoginRoutes} authed={this.state.authed} path='/login' />
                  <Route component={Register} authed={this.state.authed} exact path='/register' />
                  <Route component={PcRoutes}path='/pc'/>
                  <Route component={NpcRoutes} path='/' />
                </Switch>
              </div>
            </Container>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
