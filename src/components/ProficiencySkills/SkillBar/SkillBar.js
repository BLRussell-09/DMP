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

  formFieldStringStateT = (skillName) =>
  {
    const tempSkills = {...this.state.skills};
    tempSkills[skillName] = true;
    this.setState({skills: tempSkills});
  }

  formFieldStringStateF = (skillName) =>
  {
    const tempSkills = {...this.state.skills};
    tempSkills[skillName] = false;
    this.setState({skills: tempSkills});
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

  athTrigger = (skillName) =>
  {

    if (this.state.skills[skillName] === true)
    {
      this.formFieldStringStateF(skillName);
    }
    else
    {
      this.formFieldStringStateT(skillName);
    }
  }


  render()
  {

    var skillProps = this.props.skills;

    var skills = Object.keys(skillProps);

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

    const saveSkills = () =>
    {
      const skills = this.state.skills;
      var reload = this.props.reloadPc;
      skills.owner_id = this.props.character;
      skillRequests.updateSkills(skills);
      reload();
    }

    return (
      <div id="SkillBar" style={{padding: 1 +  'em'}}>
        <Row>
          <Col md={6}>
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Skills Proficiencies
              </Dropdown.Toggle>
              <DropdownMenu>
              <ListGroup.Item>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <Button onClick={saveSkills}>Save</Button>
                    </InputGroup.Prepend>
                  </InputGroup>
                </ListGroup.Item>
                <ListGroup.Item>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <Button variant="outline-secondary" onClick={acroClick}>{skills[0]}</Button>

                    </InputGroup.Prepend>
                  </InputGroup>
                </ListGroup.Item>
                <ListGroup.Item>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <Button variant="outline-secondary" onClick={aniClick}>{skills[1]}</Button>

                    </InputGroup.Prepend>
                  </InputGroup>
                </ListGroup.Item>
                <ListGroup.Item>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <Button variant="outline-secondary" onClick={arcClick}>{skills[2]}</Button>

                    </InputGroup.Prepend>
                  </InputGroup>
                </ListGroup.Item>
                <ListGroup.Item>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <Button variant="outline-secondary" onClick={athClick}>{skills[3]}</Button>

                    </InputGroup.Prepend>
                  </InputGroup>
                </ListGroup.Item>
                <ListGroup.Item>
                  <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <Button variant="outline-secondary" onClick={decClick}>{skills[4]}</Button>

                  </InputGroup.Prepend>
                </InputGroup>
                </ListGroup.Item>
                <ListGroup.Item>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <Button variant="outline-secondary" onClick={hisClick}>{skills[5]}</Button>

                    </InputGroup.Prepend>
                  </InputGroup>
                </ListGroup.Item>
                <ListGroup.Item>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <Button variant="outline-secondary" onClick={insClick}>{skills[6]}</Button>

                    </InputGroup.Prepend>
                  </InputGroup>
                </ListGroup.Item>
                <ListGroup.Item>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <Button variant="outline-secondary" onClick={intClick}>{skills[7]}</Button>

                    </InputGroup.Prepend>
                  </InputGroup>
                </ListGroup.Item>
                <ListGroup.Item>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <Button variant="outline-secondary" onClick={invClick}>{skills[8]}</Button>

                    </InputGroup.Prepend>
                  </InputGroup>
                </ListGroup.Item>
                <ListGroup.Item>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <Button variant="outline-secondary" onClick={medClick}>{skills[9]}</Button>

                    </InputGroup.Prepend>
                  </InputGroup>
                </ListGroup.Item>
                <ListGroup.Item>
                  <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <Button variant="outline-secondary" onClick={natClick}>{skills[10]}</Button>

                  </InputGroup.Prepend>
                </InputGroup>
                </ListGroup.Item>
                <ListGroup.Item>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <Button variant="outline-secondary"onClick={perClick}>{skills[11]}</Button>

                    </InputGroup.Prepend>
                  </InputGroup>
                </ListGroup.Item>
                <ListGroup.Item>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <Button variant="outline-secondary" onClick={perFClick}>{skills[12]}</Button>

                    </InputGroup.Prepend>
                  </InputGroup>
                </ListGroup.Item>
                <ListGroup.Item>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <Button variant="outline-secondary"onClick={perSClick}>{skills[13]}</Button>

                    </InputGroup.Prepend>
                  </InputGroup>
                </ListGroup.Item>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
      </div>
    );
  }
}

export default SkillBar;