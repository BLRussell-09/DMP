import React, {Component} from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap';
import bagRequests from '../requests/bagRequests';

class ItemDescription extends Component
{
  render()
  {
    var d = "d"
    const xClick = () =>
      {
        var id = this.props.item.id
        bagRequests.deleteItem(id);
        this.forceUpdate();
        this.props.reload();
      }
    return (
      <div>
        <h3>Description</h3>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{this.props.item.name}</Card.Title>
            <Card.Text>
              {this.props.item.description}
            </Card.Text>
            <Row>
              <Col md={8}>
                <Button variant="danger" onClick={xClick}>Delete Item</Button>
              </Col>
            </Row>

          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default ItemDescription;