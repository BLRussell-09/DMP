import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Navibar from '../components/Navibar/Navibar';
import firebase from 'firebase';
import firebaseApp from '../firebase_requests/connection';
import auth from '../firebase_requests/auth';
import './App.css';
import PcRoutes from '../components/PcPage/pcRoutes';

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
            <Container>
              <div>
                <Switch>
                  <Route component={PcRoutes}path='/pc'/>
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
