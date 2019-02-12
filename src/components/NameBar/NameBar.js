import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

class NameBar extends Component
{
  render()
  {
    return(
      <div>
        <Row key={this.props.charProp.id}>
           <Col md={1}><h3>Level: {this.props.charProp.level}</h3></Col>
           <Col md={3}><h3>{this.props.charProp.name}</h3></Col>
           <Col md={2}><h5>Hit Points: {this.props.charProp.hit_points}</h5></Col>
           <Col md={2}><h5>Race: {this.props.charProp.race_name}</h5></Col>
           <Col md={2}><h5>Experience: {this.props.charProp.experience }</h5></Col>
         </Row>
      </div>
    );
  }
}

export default NameBar;