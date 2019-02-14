import React, {Component} from 'react';
import {Tab, Row, Col, ListGroup, Button, Card} from 'react-bootstrap';
import bagRequests from '../requests/bagRequests';
import './weaponsBay.css';
import WeaponDescription from './WeaponDescription/WeaponDescription';
import AddItems from '../AddItems/AddItems';
import ItemDescription from '../ItemDescription/ItemDescription';

class WeaponsBay extends Component
{
  state =
  {
    weapon: {
      description: ""
    },
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
      const weaponClick = () =>
      {
        var tempWeapon = {...this.state.weapon};
        tempWeapon = weapon;
        this.setState({weapon: tempWeapon});
        var card = document.getElementById("weapCard");
        card.removeAttribute("class")
      }

      return (
        <ListGroup.Item action key={weapon.id} onClick={weaponClick}>
          {weapon.name}
        </ListGroup.Item>
      );
    });

    const itemMaker = itemsList.map((item) =>
    {
      const itemClick = () =>
      {
        var tempItem = {...this.state.item};
        tempItem = item;
        this.setState({weapon: tempItem});
        var card = document.getElementById("weapCard");
        card.removeAttribute("class")
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
            <Col md={6} className="itemHolder">
                <ListGroup variant="flush" className="itemList">
                  {itemMaker}
                </ListGroup>
              </Col>
            <Col md={6}>
            <ListGroup variant="flush" className="itemList">
              {weapMaker}
            </ListGroup>
            </Col>
            <Col md={6}>
              <WeaponDescription weapon={descriptionProp} reload={this.props.reload}/>
            </Col>
            <Col md={6}>
              <Card className="d-none" id="dmgCard">
                <Card.Body>
                <Card.Title id="weaponTitle" >Damage</Card.Title>
                <Card.Text id="damageText"></Card.Text>
                  </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
          </Row>
          <Row>
            <Col md={6}>
              <ItemDescription item={iDescProp} reload={this.props.reload}/>
            </Col>
          </Row>
      </div>
    )
  }
}

export default WeaponsBay