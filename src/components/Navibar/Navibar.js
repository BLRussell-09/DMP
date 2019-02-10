import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap'
//import {Link} from 'react-router-dom'

class Navibar extends Component {
  render()
  {
    const {authed, logout} = this.props;

    const logoutUser = () =>
    {
      logout();
    };

    return (
      <div className="Navibar">
              {
                authed ? (
                <Navbar bg="dark" variant="dark">
                  <Navbar.Brand href="#home">DMP</Navbar.Brand>
                    <Nav className="mr-auto">
                      <Nav.Link href="/">Home</Nav.Link>
                      <Nav.Link href="/pc">Player Characters</Nav.Link>
                      <Nav.Link href="#pricing">NPC</Nav.Link>

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
                        <Nav.Link href="/login">Login</Nav.Link>
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