import React, {Component} from 'react';
import {Image} from 'react-bootstrap';

class RaceBar extends Component
{
  state = {
    character: {}
  }

  render()
  {
    const img = () =>
    {
      if (this.props.charProp.race_name === "dragonborn"){
          return (
          <Image src="https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/340/420/618/636272677995471928.png" fluid />
        );
      }
      else if (this.props.charProp.race_name === "dwarf")
      {
        return (
          <Image src="https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/254/420/618/636271781394265550.png" fluid />
        );
      }
      else if (this.props.charProp.race_name === "elf")
      {
        return (
          <Image src="https://media-waterdeep.cursecdn.com/avatars/thumbnails/7/639/420/618/636287075350739045.png" fluid />
        );
      }
      else if (this.props.charProp.race_name === "gnome")
      {
        return (
          <Image src="https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/334/420/618/636272671553055253.png" fluid />
        );
      }
      else if (this.props.charProp.race_name === "half-elf")
      {
        return (
          <Image src="https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/481/420/618/636274618102950794.png" fluid />
        );
      }
      else if (this.props.charProp.race_name === "halfling")
      {
        return (
          <Image src="https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/256/420/618/636271789409776659.png" fluid />
        );
      }
      else if (this.props.charProp.race_name === "half-orc" || this.props.charProp.race_name === "Half-Orc" )
      {
        return (
          <Image src="https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/466/420/618/636274570630462055.png" fluid />
        );
      }
      else if (this.props.charProp.race_name === "human")
      {
        return (
          <Image src="https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/258/420/618/636271801914013762.png" fluid />
        );
      }
      else if (this.props.charProp.race_name === "tiefling")
      {
        return (
          <Image src="https://media-waterdeep.cursecdn.com/avatars/thumbnails/7/641/420/618/636287076637981942.png" fluid />
        );
      }

    };

    var imgComp = img();
    return (
      <div>{imgComp}</div>

    )
  }
}

export default RaceBar