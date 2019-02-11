import React, {Component} from 'react';
import {Tab, Row, Col, ListGroup, Button} from 'react-bootstrap';
import bagRequests from '../requests/bagRequests';
import './weaponsBay.css';
import WeaponDescription from './WeaponDescription/WeaponDescription';
import AddItems from '../AddItems/AddItems';
import ItemDescription from '../ItemDescription/ItemDescription';

class WeaponsBay extends Component
{
  state =
  {
    weapon: {},
    item: {}
  }
  render ()
  {
    var weaponsList = this.props.weapons;
    var itemsList = this.props.items;
    var descriptionProp = this.state.weapon;
    var iDescProp = this.state.item;
    var charProp = this.props.character;
    const weapMaker = weaponsList.map((weapon) =>
    {
      var id = weapon.id

      const weaponClick = () =>
      {
        var tempWeapon = {...this.state.weapon};
        tempWeapon = weapon;
        this.setState({weapon: tempWeapon});
      }

      const xClick = () =>
      {
        bagRequests.deleteWeapon(id);
        this.props.reload();
      }
      return (
        <ListGroup.Item action key={weapon.id} onClick={weaponClick}>
          {weapon.name}
        </ListGroup.Item>
      );
    });

    const itemMaker = itemsList.map((item) =>
    {
      var id = item.id;

      const itemClick = () =>
      {
        var tempItem = {...this.state.item};
        tempItem = item;
        this.setState({item: tempItem});
      }
      return (
        <ListGroup.Item action key={item.id} onClick={itemClick}>
          {item.name}
        </ListGroup.Item>
      );

    })

    return (
      <div className="weaponsBay">
          <Row>
            <Col md={6}>
            <h3>Weapons</h3>
            <ListGroup variant="flush">
              {weapMaker}
            </ListGroup>
            </Col>
            <Col md={6}>
              <WeaponDescription weapon={descriptionProp} reload={this.props.reload}/>
            </Col>
          </Row>
          <h3>Items</h3>
          <Row>
            <AddItems character={charProp} reload={this.props.reload}/>
          </Row>
          <Row>
            <Col md={6}>
              <ListGroup variant="flush">
                {itemMaker}
              </ListGroup>
            </Col>
            <Col md={6}>
              <ItemDescription item={iDescProp} reload={this.props.reload}/>
            </Col>
          </Row>
      </div>
    )
  }
}

export default WeaponsBay