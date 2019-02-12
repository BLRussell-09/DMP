import React, {Component} from 'react';
import npcRequests from '../NpcRequests/NpcRequests';
import {Row, Button, OverlayTrigger, Col, Popover} from 'react-bootstrap';
import RaceBar from '../../RaceBar/RaceBar';
import NameBar from '../../NameBar/NameBar';
import AbilityBar from '../../AbilityScores/AbilityBar/AbilityBar';
import AbilityBarNpc from '../../AbilityScores/AbilityBarNpc/AbilityBarNpc';
import ItemDescription from '../../Bags/ItemDescription/ItemDescription';
class NpcPage extends Component
{
  state = {
    character: []
  }

  componentDidMount()
  {
    npcRequests.getRandomNpc()
    .then((res) =>
    {
      this.setState({character: res});
    }).catch((err) =>
    {
      console.error(err);
    });
  }

  render()
  {
    var character = this.state.character;
    var abilityScores = this.state.character.abilityScores;
    var abScoreArr = [];
    abScoreArr.push(abilityScores);
    var weapons = this.state.character.weapons;
    var items = this.state.character.items;
    return (
      <div>
        <NameBar charProp={character}/>
        <Row>
          <AbilityBarNpc abilities={abilityScores}/>
        </Row>
        <Row>
          <Col>
          </Col>
          <Col md={{span: 3, offset: 6}}>
          <RaceBar charProp={character}/>
          </Col>
        </Row>


      </div>

    )
  }
}

export default NpcPage