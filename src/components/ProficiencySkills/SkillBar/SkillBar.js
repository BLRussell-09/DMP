import React, {Component} from 'react';
import {ListGroup, Row, Col} from 'react-bootstrap';
import skillRequests from '../SkillRequests/skillRequests';
import './SkillBar.css';

class SkillBar extends Component
{

  state =
  {
    skills: {
      acrobatics: false,
      animal_handling: false,
      arcana: false,
      athletics: false,
      deception: false,
      history: false,
      insight: false,
      intimidation: false,
      investigation: false,
      medicine: false,
      nature: false,
      perception: false,
      performance: false,
      persuasion: false,
      religion: false,
      sleight_of_hands: false,
      stealth: false,
      survival: false,
      owner_id: ''
    }
  }

  componentDidMount()
  {
      this.doThing();
  }

  saveSkills = (skills) =>
  {
    var reload = this.props.reloadPc;
    skills.owner_id = this.props.character;
    skillRequests.updateSkills(skills);
    reload();
  }

  formFieldStringStateT = (skillName) =>
  {
    const tempSkills = {...this.state.skills};
    tempSkills[skillName] = true;
    this.setState({skills: tempSkills});
    this.saveSkills(tempSkills);
  }

  formFieldStringStateF = (skillName) =>
  {
    const tempSkills = {...this.state.skills};
    tempSkills[skillName] = false;
    this.setState({skills: tempSkills});
    this.saveSkills(tempSkills);
  }

  athTrigger = (e) =>
  {

    if (this.state.skills[e.target.textContent] === true)
    {
      this.formFieldStringStateF(e.target.textContent);
    }
    else
    {
      e.target.classList.add("red");
      this.forceUpdate();
      this.formFieldStringStateT(e.target.textContent);
    }
  }

  doThing = () =>
    {
      setTimeout(() =>
      {
        if(this.props.skills.owner_id)
        {
          var pcSkills = this.props.skills;
          this.setState({skills: pcSkills});
        }
      }, 3000)
    }

  render()
  {

    var skillProps = this.props.skills;

    var skills = Object.keys(skillProps);

    var skillsComp = skills.map((skill) =>
    {
      if(skill !== "owner_id")
      {
        if (this.state.skills[skill])
        {
          return (
          <ListGroup.Item action key={skill} onClick={((e) => {this.athTrigger(e)})}id={skill} className="red">{skill}</ListGroup.Item>
        );
        }
        else {
          return (
            <ListGroup.Item action key={skill} onClick={((e) => {this.athTrigger(e)})} id={skill}>{skill}</ListGroup.Item>
          )
        }
      }
    })

    return (
      <div id="SkillBar" style={{padding: 1 +  'em'}}>
        <Row>
          <Col md={6}>
            <h3>Skills</h3>
            <div className="skillList">
              <ListGroup >
                {skillsComp}
              </ListGroup>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SkillBar;