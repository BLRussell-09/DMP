import React, {Component} from 'react';
import {Card} from 'react-bootstrap';

class NpcItemDescription extends Component
{
  render()
  {
    return (
      <div>
        <Card style={{ width: '18rem' }} className="d-none" id="itemCard">
          <Card.Body>
            <Card.Title>{this.props.item.name}</Card.Title>
            <Card.Text>
              {this.props.item.description}
            </Card.Text>

          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default NpcItemDescription;