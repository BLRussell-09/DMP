import React, {Component} from 'react';
import {Row, Col, Popover,OverlayTrigger,Button} from 'react-bootstrap';
import './NameBar.css';

class NameBar extends Component
{

  render()
  {

    if (this.props.charProp.length > 0 )
      {
        console.log(this.props.charProp);
      }

    const popover = () =>
    {
      function jsUcfirst(string)
      {
          return string.charAt(0).toUpperCase() + string.slice(1);
      }
      var raceName = jsUcfirst(this.props.charProp.race_name);
      var className = jsUcfirst(this.props.charClass[0].class_name);
      return (
      <Popover id="popover-basic" title={raceName + " " +  className}>
        {this.props.charProp.characteristics}
        <br />
        {this.props.charProp.description}
      </Popover>
    )};

    const Name = () => {
      const pop = popover()
      return (

        <OverlayTrigger trigger="click" placement="right" overlay={pop}>
          <Button variant="success">{this.props.charProp.name}</Button>
        </OverlayTrigger>
      );
    };

  var nameBar;
  if(this.props.charProp && this.props.charClass)
  {
    nameBar = Name();
  }


    return(
        <Row className="nameBar" key={this.props.charProp.id}>
           <Col md={1}><h3>Level: {this.props.charProp.level}</h3></Col>
           <Col md={3}><h3>{nameBar}</h3></Col>
           <Col md={2}><h5>Hit Points: {this.props.charProp.hit_points}</h5></Col>
           <Col md={2}><h5>Race: {this.props.charProp.race_name}</h5></Col>
           <Col md={2}><h5>Experience: {this.props.charProp.experience }</h5></Col>
         </Row>
    );
  }
}

export default NameBar;