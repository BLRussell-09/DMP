import React, {Component}from 'react';
import pcRequests from '../requests/pcRequests';
import {Col, Row, OverlayTrigger, Button, Popover, ButtonGroup} from 'react-bootstrap';
import AbilityBar from '../../AbilityScores/AbilityBar/AbilityBar';
import SkillBar from '../../ProficiencySkills/SkillBar/SkillBar';
import RaceBar from '../../RaceBar/RaceBar';
import Bags from '../../Bags/Bags';
import './SinglePc.css'

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

  deleteCharacter = () =>
  {
    var id = this.props.match.params.id;
    var pc = this.state.character[0];
    pc.is_active = false;
    this.props.history.push("/pc");
    pcRequests.updatePc(pc, id);
  }

  updateCharacter = () =>
  {
    var id = this.props.match.params.id;
    var pc = this.state.character[0];
    pcRequests.updatePc(pc, id);
    this.forceUpdate();
    this.getCharacter();
  }

    getRandomInt = (max) =>
    {
      return Math.floor(Math.random() * Math.floor(max)) + 1;
    }

   abilityMod = (num) =>
    {
        return Math.floor((num - 10)/2);
    };

  levelUpCharacter = () =>
  {
    var id = this.props.match.params.id;
    var pc = this.state.character[0];
    var classDie = pc.classes[0].hit_die;
    var conMod = this.abilityMod(pc.abilityScores.constitution);
    var newHp = this.getRandomInt(classDie) + conMod;
    var classLevel = pc.playerClasses[0].class_level
    var newClassLevel = classLevel + 1;
    pc.hit_points = pc.hit_points + newHp;
    pc.playerClasses[0].class_level = newClassLevel;
    pc.level = pc.level + 1;
    pcRequests.updatePc(pc, id);
    this.getCharacter();
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
      //characterP = character
      var classes = character.playerClasses;
      classes.forEach(c => {
          classList.push(c.class_name);
      });
      var characterClasses = classList.toString()

      const popover = (
        <Popover id="popover-basic" title={character.race_name + " "+  characterClasses}>
          {character.description}
          <br />
          {character.characteristics}
        </Popover>
      );

        const Name = () => {
          return (
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <Button className="nameBtn">{character.name}</Button>
          </OverlayTrigger>
          );
        };

      var nameBar = Name();

      return (
        <Row key={character.id} className="namebar">
          <Col md={1}><h3>Level: {character.level}</h3></Col>
          <Col md={3}><h3>{nameBar}</h3></Col>
          <Col md={1}><h5>HP: {character.hit_points}</h5></Col>
          <Col md={2}><h5>Proficiency Bonus: {character.proficiency_score}</h5></Col>
          <Col md={1}><h5>Exp: {character.experience }</h5></Col>
          <Col md={4}>
            <ButtonGroup>
              <Button variant="warning" onClick={this.levelUpCharacter} className="savePcBtn">Level Up</Button>
              <Button variant="success" onClick={this.updateCharacter} className="savePcBtn">Save</Button>
              <Button variant="danger" onClick={this.deleteCharacter} className="deletePcBtn">Delete Character</Button>
            </ButtonGroup>
          </Col>
        </Row>

      );
    });

    return (
      <div>
        {nameBar}

        <AbilityBar abilityScores={abilityScoresArr}/>
        <Row>
          <Col md={6}>
            <SkillBar character={charProp} skills={skillsProp} reloadPc={this.getCharacter}/>
          </Col>
          <Bags items={itemsProp} weapons={weaponsProp} character={charProp} reloadPc={this.getCharacter}/>
        </Row>

      </div>
    );
  }
}

export default SinglePc;