import React, {Component}from 'react';
import pcRequests from '../requests/pcRequests';
import {Col, Row, OverlayTrigger, Button, Popover} from 'react-bootstrap';
import AbilityBar from '../../AbilityScores/AbilityBar/AbilityBar';
import SkillBar from '../../ProficiencySkills/SkillBar/SkillBar';
import Bags from '../../Bags/Bags';

class SinglePc extends Component
{
  state = {
    character: []
  }
  componentDidMount()
  {
    var id = this.props.match.params.id;
    pcRequests.getPc(id)
    .then((res) =>
    {
      this.setState({character: res});
    })
    .catch();
  }

  getCharacter = () =>
  {
    var id = this.props.match.params.id;
    pcRequests.getPc(id)
    .then((res) =>
    {
      this.setState({character: res});
    })
    .catch();
  }

  render()
  {
    var abilityScoresArr = [];
    var skillsProp = {};
    var weaponsProp = [];
    var itemsProp = [];
    var charProp = 0;

    const nameBar = this.state.character.map((character) =>
    {
      var classList = [];
      var scoreList = character.abilityScores;
      abilityScoresArr = scoreList;
      var skillList = character.skills;
      skillsProp = skillList;
      weaponsProp = character.weapons;
      itemsProp = character.items;
      charProp = character.id;
      var classes = character.playerClasses;
      classes.forEach(c => {
          classList.push(c.class_name);
      });
      var characterClasses = classList.toString()

      const popover = (
        <Popover id="popover-basic" title={character.race_name + " "+  characterClasses}>
          {character.charateristics}
          <br />
          {character.description}
        </Popover>
      );

        const Name = () => {
          return (
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button variant="success">{character.name}</Button>
          </OverlayTrigger>
          );
        };

      var nameBar = Name();

      return (
        <Row key={character.id}>
          <Col md={1}><h3>Level: {character.level}</h3></Col>
          <Col md={3}><h3>{nameBar}</h3></Col>
          <Col md={2}><h5>Hit Points: {character.hit_points}</h5></Col>
          <Col md={2}><h5>Race: {character.race_name}</h5></Col>
          <Col md={2}><h5>Experience: {character.experience }</h5></Col>
        </Row>

      );
    });

    return (
      <div>
        {nameBar}

        <AbilityBar abilityScores={abilityScoresArr}/>
        <Row>
          <Col md={6}>
            <SkillBar skills={skillsProp}/>
          </Col>
          <Bags items={itemsProp} weapons={weaponsProp} character={charProp} reloadPc={this.getCharacter}/>
        </Row>

      </div>
    );
  }
}

export default SinglePc;