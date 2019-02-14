import React, {Component} from 'react';
import {Navbar, Nav, Row, Col, Alert} from 'react-bootstrap'
//import {Link} from 'react-router-dom'
import './Navibar.scss';

class Navibar extends Component {

  showAlert()
    {
      var alert = document.getElementById("alertBox");
      alert.removeAttribute("class");

      setInterval(() =>
      {
        alert.classList.add("d-none");
      }, 15000);
    }

    hideAlert()
    {
      setInterval(() =>
      {
        alert.classList.add("d-none", 3000);
      });
    }

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
                  <Navbar.Brand href="/">DMP</Navbar.Brand>
                    <Nav className="mr-auto">
                      <Nav.Link href="/pc">Player Characters</Nav.Link>
                      <Nav.Link  onClick={this.showAlert}>NPC</Nav.Link>

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
        <Row>
          <Col md={{span:4, offset: 3}}>
            <Alert variant="success" id="alertBox" className="" dismissible>
              <Alert.Heading>Hey, nice to see you</Alert.Heading>
                <p>This is a danger alert—check it out!</p>
                <hr />
                <p className="mb-0">
                  Whenever you need to, be sure to use margin utilities to keep things nice
                  and tidy.
                </p>
            </Alert>
            <Alert variant="success" id="alertBox" className="d-none" dismissible>
              <Alert.Heading>Hey, nice to see you</Alert.Heading>
              <p>
                Aww yeah, you successfully read this important alert message. This example
                text is going to run a bit longer so that you can see how spacing within an
                alert works with this kind of content.
              </p>
              <hr />
              <p className="mb-0">
                Whenever you need to, be sure to use margin utilities to keep things nice
                and tidy.
              </p>
            </Alert>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Navibar;