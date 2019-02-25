import React, {Component} from 'react';
import {Navbar, Nav, Row, Col, Alert} from 'react-bootstrap'
//import {Link} from 'react-router-dom'
import './Navibar.scss';
import EventModal from './EventModal/EventModal';
import LootModal from './LootModal/LootModal';

class Navibar extends Component {

  render()
  {
    const {authed, logout} = this.props;



    const logoutUser = () =>
    {
      logout();
    };

    const loginUser = () =>
    {
      this.props.history.push('/login');
    };

    return (
      <div className="Navibar">
              {
                authed ? (
                <Navbar bg="dark" variant="dark">
                  <Navbar.Brand href="/">DMP</Navbar.Brand>
                    <Nav className="mr-auto">
                      <Nav.Link href="/pc">Player Characters</Nav.Link>
                      <EventModal/>
                      <LootModal/>
                    </Nav>
                    <Nav>
                      <Nav.Link href="/login" onClick={logoutUser}>Logout</Nav.Link>
                    </Nav>
                </Navbar>
                ): (
                  <div>
                    <Navbar bg="dark" variant="dark">
                      <Navbar.Brand href="/">DMP</Navbar.Brand>
                      <Nav className="mr-auto"></Nav>
                      <Nav>
                        <Nav.Link href='/login' >Login</Nav.Link>
                      </Nav>
                    </Navbar>
                  </div>
                )
              }
      </div>
    );
  }
}

export default Navibar;