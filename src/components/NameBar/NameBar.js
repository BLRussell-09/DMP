import React, {Component} from 'react';
import {Row, Col, Popover,OverlayTrigger,Button} from 'react-bootstrap';

class NameBar extends Component
{
  // state = {}
  // componentDidMount()
  // {
  //   if (this.props.charClass)
  //   {
  //     var charState = this.props.charProp;
  //     this.setState({})
  //   }


  // }
  render()
  {
    // var classList = [];
    // var classes = this.state.character.playerClasses;
    //   classes.forEach(c => {
    //       classList.push(c.class_name);
    //   });
    //   var characterClasses = classList.toString()

    if (this.props.charProp.length > 0 )
      {
        console.log(this.props.charProp);
        var names = this.props.charProp;
      }

    const popover = () =>{ return (
      <Popover id="popover-basic" title={this.props.charProp.race_name + " " + this.props.charClass[0].class_name }>
        {this.props.charProp.characteristics}
        <br />
        {this.props.charProp.description}
      </Popover>
    )};

    const Name = () => {
      return (
        <OverlayTrigger trigger="click" placement="top" overlay={popover}>
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
      <div>
        <Row key={this.props.charProp.id}>
           <Col md={1}><h3>Level: {this.props.charProp.level}</h3></Col>
           <Col md={3}><h3>{nameBar}</h3></Col>
           <Col md={2}><h5>Hit Points: {this.props.charProp.hit_points}</h5></Col>
           <Col md={2}><h5>Race: {this.props.charProp.race_name}</h5></Col>
           <Col md={2}><h5>Experience: {this.props.charProp.experience }</h5></Col>
         </Row>
      </div>
    );
  }
}

export default NameBar;