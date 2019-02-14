import React, {Component} from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap';
import bagRequests from '../../requests/bagRequests';

class WeaponDescription extends Component
{
  render()
  {
    var d = "d"
    const xClick = () =>
      {
        var id = this.props.weapon.id
        bagRequests.deleteWeapon(id);
        this.forceUpdate();
        this.props.reload();
      }

      const xItemClick = () =>
      {
        var id = this.props.weapon.id
        bagRequests.deleteItem(id);
        var descCard = document.getElementById("weapCard");

        descCard.classList.add("hidden");
        this.forceUpdate();
        this.props.reload();
      }

      const getRandomInt = (max) =>
      {
        return Math.floor(Math.random() * Math.floor(max)) + 1;
      }

      const damageComp = (damage) =>
      {
        return (
          <Card.Body>
              <Card.Title>{this.props.weapon.name}</Card.Title>
              <Card.Text>
                {damage}
              </Card.Text>
            </Card.Body>
        )
      };

      const setCard = (damage) =>
      {
        var card = document.getElementById("dmgCard");
        var cardBody = document.getElementById("damageText");

        card.removeAttribute("class")
        cardBody.innerText = damage;
      };

      const rollClick = () =>
      {
        if(this.props.weapon.damage_dice)
        {
          var count = this.props.weapon.dice_count;
          var dice = this.props.weapon.damage_dice;
          var damage = 0;
          var num;

          for (let idx = 0; idx < count; idx++) {
            num = getRandomInt(dice);
            damage += num;
          }
          damageComp(damage);
          setCard(damage)
        }
      };

      const cardComponent = () =>
      {
        if (this.props.weapon.damage_dice )
        {
          return (
              <Card.Body>
                <Card.Title>{this.props.weapon.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{this.props.weapon.dice_count + d + this.props.weapon.damage_dice }</Card.Subtitle>
                <Card.Text>
                  {this.props.weapon.description}
                </Card.Text>
                <Row>
                  <Col md={4}>
                    <Button onClick={rollClick}>Roll</Button>
                  </Col>
                  <Col md={8}>
                    <Button variant="danger" onClick={xClick}>Delete Weapon</Button>
                  </Col>
                </Row>

              </Card.Body>
          )
        }
        else
        {
          return (
              <Card.Body>
                <Card.Title>{this.props.weapon.name}</Card.Title>
                <Card.Text>
                  {this.props.weapon.description}
                </Card.Text>
                <Row>
                  <Col md={8}>
                    <Button variant="danger" onClick={xItemClick}>Delete Item</Button>
                  </Col>
                </Row>

              </Card.Body>
          )
        }
      }

      var cardTrigger = cardComponent();
    return (
      <div>
        <Card style={{ width: '18rem' }} className="d-none" id="weapCard">
          {cardTrigger}
        </Card>
      </div>
    )
  }
}

export default WeaponDescription;