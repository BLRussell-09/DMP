import React, {Component} from 'react';
import {Form, Button, Col, Row} from 'react-bootstrap';
import auth from '../../firebase_requests/auth';
import './Login.css';

class Login extends Component
{
  state =
  {
    user: {
      email: '',
      password: ''
    }
  }

  emailChange = e =>
  {
    const tempUser = {...this.state.user};
    tempUser.email = e.target.value;
    this.setState({user: tempUser});
  };

  passwordChange = e =>
  {
    const tempUser = {...this.state.user};
    tempUser.password = e.target.value;
    this.setState({user: tempUser});
  };

  login = e =>
  {
    const {user} = this.state;
    e.preventDefault();
    auth.loginUser(user)
    .then(() =>
    {
      this.props.history.push('/pc');
    }).catch((err) =>
    {
      console.error(err);
    });
  };

  registerPage = () =>
  {
    this.props.history.push('/register');
  }

  render()
  {
    return(
      <div >
        <Row>
          <Col md={{span: 4, offset: 3}} className="Login">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"  onChange={this.emailChange}/>
                <Form.Text className="text-muted">
                  Welcome back!
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={this.passwordChange}/>
              </Form.Group>
              <Button variant="primary" type="submit" onClick={this.login}>
                Login
              </Button>
              <h5 onClick={this.registerPage}>Need to register? Click here </h5>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Login;