import React, {Component} from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap';
import bagRequests from '../requests/bagRequests';

class ItemDescription extends Component
{
  render()
  {
    const xClick = () =>
      {
        var id = this.props.item.id
        bagRequests.deleteItem(id);
        this.forceUpdate();
        this.props.reload();
      }
    return (
      <div>
        <Card style={{ width: '18rem' }} className="d-none" id="itemCard">
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