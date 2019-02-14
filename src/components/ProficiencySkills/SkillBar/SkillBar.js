import React, {Component} from 'react';
import {InputGroup, Button, Dropdown, ListGroup, Row, Col} from 'react-bootstrap';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
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

  setAthSkills = (skillName) =>
  {
    this.athTrigger("athletics");
  }
  setAcrSkills = (skillName) =>
  {
    this.athTrigger("acrobatics");
  }
  setAniHaniSkills = (skillName) =>
  {
    var skills = this.props.skills;
    this.setState({skills});
    this.athTrigger("animal_handling");
  }
  setArcanaSkills = (skillName) =>
  {
    var skills = this.props.skills;
    this.setState({skills});
    this.athTrigger("arcana");
  }
  setDecSkills = (skillName) =>
  {
    var skills = this.props.skills;
    this.setState({skills});
    this.athTrigger("deception");
  }
  setHistSkills = (skillName) =>
  {
    var skills = this.props.skills;
    this.setState({skills});
    this.athTrigger("history");
  }
  setInsSkills = () =>
  {
    var skills = this.props.skills;
    this.setState({skills});
    this.athTrigger("insight");
  }
  setIntSkills = () =>
  {
    var skills = this.props.skills;
    this.setState({skills});
    this.athTrigger("intimidation");
  }
  setInvSkills = () =>
  {
    var skills = this.props.skills;
    this.setState({skills});
    this.athTrigger("investigation");
  }
  setMedSkills = (skillName) =>
  {
    var skills = this.props.skills;
    this.setState({skills});
    this.athTrigger("medicine");
  }
  setNatSkills = (skillName) =>
  {
    var skills = this.props.skills;
    this.setState({skills});
    this.athTrigger("nature");
  }
  setPerSkills = (skillName) =>
  {
    var skills = this.props.skills;
    this.setState({skills});
    this.athTrigger("perception");
  }
  setPerfSkills = (skillName) =>
  {
    var skills = this.props.skills;
    this.setState({skills});
    this.athTrigger("performance");
  }
  setPerSSkills = (skillName) =>
  {
    var skills = this.props.skills;
    this.setState({skills});
    this.athTrigger("persuasion");
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
      }, 1000)
    }

  colorCoder = () =>
  {
    if (this.state.skills.acrobatics === true)
    {
      var button = document.getElementById("acrobatics");
      button.classList.add("red");
    }
  }

  render()
  {

    var skillProps = this.props.skills;

    var skills = Object.keys(skillProps);

    var skillsComp = skills.map((skill) =>
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

    })

    var acroClick = this.setAcrSkills;
    var aniClick = this.setAniHaniSkills;
    var arcClick = this.setArcanaSkills;
    var athClick = this.setAthSkills;
    var decClick = this.setDecSkills
    var hisClick = this.setHistSkills;
    var insClick = this.setInsSkills;
    var intClick = this.setIntSkills;
    var invClick = this.setInvSkills;
    var medClick = this.setMedSkills;
    var natClick = this.setNatSkills;
    var perClick = this.setPerSkills;
    var perFClick = this.setPerfSkills;
    var perSClick = this.setPerSSkills;

    // const saveSkills = () =>
    // {
    //   const skills = this.state.skills;
    //   var reload = this.props.reloadPc;
    //   skills.owner_id = this.props.character;
    //   skillRequests.updateSkills(skills);
    //   reload();
    // }

    // const setSkills = () =>
    // {
    //   if (this.props.skills.owner_id )
    //   {
    //     this.doThing();
    //   }
    // }

    // var skillSetter = setSkills();
    // const colorCode = () =>
    // {
    //   if (this.state.acrobatics)
    //   {

    //   }
    // }


    return (
      <div id="SkillBar" style={{padding: 1 +  'em'}}>
        <Row>
          <Col md={6}>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Skills Proficiencies
              </Dropdown.Toggle>
              <DropdownMenu className="skillDrop">
              <ListGroup.Item>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <Button >Save</Button>
                    </InputGroup.Prepend>
                  </InputGroup>
                </ListGroup.Item>
                <ListGroup.Item action onClick={acroClick} id="acrobatics">{skills[0]}</ListGroup.Item>
                <ListGroup.Item action onClick={aniClick}>{skills[1]}</ListGroup.Item>
                <ListGroup.Item action onClick={arcClick}>{skills[2]}</ListGroup.Item>
                <ListGroup.Item action onClick={athClick}>{skills[3]}</ListGroup.Item>
                <ListGroup.Item action onClick={decClick}>{skills[4]}</ListGroup.Item>
                <ListGroup.Item action onClick={hisClick}>{skills[5]}</ListGroup.Item>
                <ListGroup.Item action onClick={insClick}>{skills[6]}</ListGroup.Item>
                <ListGroup.Item action onClick={intClick}>{skills[7]}</ListGroup.Item>
                <ListGroup.Item action onClick={invClick}>{skills[8]}</ListGroup.Item>
                <ListGroup.Item action onClick={medClick}>{skills[9]}</ListGroup.Item>
                <ListGroup.Item action onClick={natClick}>{skills[10]}</ListGroup.Item>
                <ListGroup.Item action onClick={perClick}>{skills[11]}</ListGroup.Item>
                <ListGroup.Item action onClick={perFClick}>{skills[12]}</ListGroup.Item>
                <ListGroup.Item action onClick={perSClick}>{skills[13]}</ListGroup.Item>
              </DropdownMenu>
            </Dropdown>
            <ListGroup>
              {skillsComp}
            </ListGroup>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SkillBar;