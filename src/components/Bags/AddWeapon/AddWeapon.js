import React ,{ Component } from 'react';
import { Modal, Button, Form, Row} from 'react-bootstrap';
import bagRequests from '../requests/bagRequests';

class AddWeapon extends Component
{

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      weapon: {
        name: '',
        dice_count: 0,
        damage_dice: 0,
        description: '',
        owner_id: this.props.character
      }
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    const tempWeapon = {...this.state.weapon};
    tempWeapon.owner_id = this.props.character;
    this.setState({weapon: tempWeapon});
    this.setState({ show: true });
  }

  formFieldStringState = (stateName, e) =>
  {
    const tempWeapon = {...this.state.weapon};
    tempWeapon[stateName]= e.target.value;
    this.setState({weapon: tempWeapon});
  }

  formFieldNumberState = (name, e) =>
  {
    const tempWeapon = {...this.state.weapon};
    tempWeapon[name] = e.target.value * 1;
    this.setState({weapon: tempWeapon});
  }

  nameChange = (e) =>
  {
    this.formFieldStringState("name", e);
  }

  descriptionChange = (e) =>
  {
    this.formFieldStringState("description", e);
  }

  diceCountChange = (e) =>
  {
    this.formFieldNumberState("dice_count", e);
  }

  damageDiceChange = (e) =>
  {
    this.formFieldNumberState("damage_dice", e)
  }

  render ()
  {
    var addClick = () =>
    {
      const tempWeapon = {...this.state.weapon};
      tempWeapon.owner_id = this.props.character;
      this.setState({weapon: tempWeapon});
      bagRequests.addWeapon(this.state.weapon);
      this.props.reload();
      this.handleClose();
    }
    return (
      <div>
        <Row>
          <Button variant="primary" onClick={this.handleShow}>
            Add A Weapon
          </Button>

          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" onChange={this.nameChange}/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Dice Count</Form.Label>
                  <Form.Control type="number" min="1" max="15"onChange={this.diceCountChange}/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                  <Form.Label>Damage Dice</Form.Label>
                  <Form.Control as="select" multiple onChange={this.damageDiceChange}>
                    <option>4</option>
                    <option>6</option>
                    <option>8</option>
                    <option>10</option>
                    <option>12</option>
                    <option>20</option>
                  </Form.Control>
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
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Row>
      </div>
    );
  }
}

export default AddWeapon;