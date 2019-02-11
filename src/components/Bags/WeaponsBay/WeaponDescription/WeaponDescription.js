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
    return (
      <div>
        <h3>Description</h3>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{this.props.weapon.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{this.props.weapon.dice_count + d + this.props.weapon.damage_dice }</Card.Subtitle>
            <Card.Text>
              {this.props.weapon.description}
            </Card.Text>
            <Row>
              <Col md={4}>
                <Button>Roll</Button>
              </Col>
              <Col md={8}>
                <Button variant="danger" onClick={xClick}>Delete Weapon</Button>
              </Col>
            </Row>

          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default WeaponDescription;