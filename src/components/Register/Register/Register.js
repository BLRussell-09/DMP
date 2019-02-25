import React , {Component} from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';
import auth from '../../../firebase_requests/auth';
import './Register.css';

class Register extends Component
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

  register = e =>
  {
    const {user} = this.state;
    e.preventDefault();
    auth.registerUser(user)
    .then(() =>
    {
      this.props.history.push('/pc')
    }).catch((err) =>
    {
      console.error(err);
    });
  };

  render()
  {
    return (
      <div className="register">
        <Row>
          <Col md={{span: 6, offset: 3}}  className="register">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"  onChange={this.emailChange}/>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={this.passwordChange}/>
              </Form.Group>
              <Button variant="primary" type="submit" onClick={this.register}>
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Register