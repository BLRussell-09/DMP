import React ,{ Component } from 'react';
import { Modal, Button, Form, Row} from 'react-bootstrap';
import bagRequests from '../requests/bagRequests';

class AddItems extends Component
{

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      item: {
        name: '',
        quantity: 0,
        description: '',
        owner_id: this.props.character
      }
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    const tempItem = {...this.state.item};
    tempItem.owner_id = this.props.character;
    this.setState({item: tempItem});
    this.setState({ show: true });
  }

  formFieldStringState = (stateName, e) =>
  {
    const tempItem = {...this.state.item};
    tempItem[stateName]= e.target.value;
    this.setState({item: tempItem});
  }

  formFieldNumberState = (name, e) =>
  {
    const tempItem = {...this.state.item};
    tempItem[name] = e.target.value * 1;
    this.setState({item: tempItem});
  }

  nameChange = (e) =>
  {
    this.formFieldStringState("name", e);
  }

  descriptionChange = (e) =>
  {
    this.formFieldStringState("description", e);
  }

  quantityCountChange = (e) =>
  {
    this.formFieldNumberState("quantity", e);
  }

  render ()
  {
    var addClick = () =>
    {
      const tempItem = {...this.state.item};
      tempItem.owner_id = this.props.character;
      this.setState({item: tempItem});
      bagRequests.addItem(this.state.item);
      this.props.reload();
      this.handleClose();
    }
    return (
      <div>
        <Row>
          <Button variant="primary" onClick={this.handleShow}>
            Add An Item
          </Button>

          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add an Item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" onChange={this.nameChange}/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control type="number" min="1" onChange={this.quantityCountChange}/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows="3" onChange={this.descriptionChange}/>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={addClick}>
                Save Item
              </Button>
            </Modal.Footer>
          </Modal>
        </Row>
      </div>
    );
  }
}

export default AddItems;