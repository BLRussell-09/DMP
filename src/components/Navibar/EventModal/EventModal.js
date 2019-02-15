import React, {Component} from 'react';
import {Modal, Button, Nav} from 'react-bootstrap';
import eventRequests from '../EventModal/eventRequests/eventRequests';

class EventModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      message: ''
    };
  }

  handleClose() {
    this.setState({ show: false, message: '' });
  }

  handleShow() {
    eventRequests.getRandEvent()
    .then((res) =>
    {
      this.setState({ show: true, message: res });
    }).catch((err) =>
    {
      console.error(err);
    })

  }

  render() {
    return (
      <>
        <Nav.Link onClick={this.handleShow}>
          Random Event
        </Nav.Link>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Need an event?</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.state.message}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default EventModal;