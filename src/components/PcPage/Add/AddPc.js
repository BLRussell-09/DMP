import React, {Component} from 'react';
import {Button, Col, ListGroup, Row, Form} from 'react-bootstrap';
import firebase from 'firebase';
// import dmp from '../../../firebase_requests/dmp';
import raceAPI from '../requests/raceAPI';
import classAPI from '../requests/classAPI';
import pcRequests from '../requests/pcRequests';
import AbilityScoreGen from '../../AbilityScores/AbilityScoreGen/AbilityScoreGen';

class AddPc extends Component {
  state =
  {
    character: {
      name: '',
      characteristics: '',
      description: '',
      hit_points: 0,
      proficiency_score: 2,
      experience: 0,
      level: 1,
      race_name: '',
      is_active: true,
      firebase_id: '',
      type: 'pc',
      playerClasses: [
        {
          class_name: '',
          class_level: 0
        }
      ],
      abilityScores: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
      }
    },
    races: [],
    classes: []
  }

  formFieldStringState = (name, e) =>
  {
    const tempCharacter = {...this.state.character};
    tempCharacter[name] = e.target.value;
    this.setState({character: tempCharacter});
  }

  formFieldPcClass = (e) =>
  {
    const tempCharacter = {...this.state.character};
    tempCharacter.playerClasses[0].class_name = e.target.value
    tempCharacter.playerClasses[0].class_level = 1;
    this.setState({character: tempCharacter});
  }

  formFieldPcAs = (name, e) =>
  {
    const tempCharacter = {...this.state.character};
    tempCharacter.abilityScores[name] = e.target.value * 1;
    this.setState({character: tempCharacter});
  }

  formFieldPcAsNum = (name, num) =>
  {
    const tempCharacter = {...this.state.character};
    tempCharacter.abilityScores[name] = num;
    this.setState({character: tempCharacter});
  }

  nameChange = (e) =>
  {
    this.formFieldStringState('name', e);
  };

  raceChange = (e) =>
  {
    this.formFieldStringState('race_name', e)
  };

  classChange = (e) =>
  {
    this.formFieldPcClass(e)
  }

  submitPc = () =>
  {
    var pc = this.state.character;
    pcRequests.addPc(pc)
    .then(() =>
    {
      this.forceUpdate();
      this.props.history.push('/pc');
    }).catch((err) =>
    {
      console.error(err);
    })

  }
  componentDidMount()
  {
    var pc = this.state.character;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
         //User is signed in.

        pc.firebase_id = user.uid
      } else {
         //No user is signed in.
      }
    });
    raceAPI.getRaces()
    .then((res) =>
    {
      this.setState({races: res});
      classAPI.getClasses().then((classes) =>
      {
        this.setState({classes});
      })
    })
    .catch((err) =>
    {
      console.error(err);
    })
  }
  render()
  {

    const raceList = this.state.races.map((race) =>
    {
      return (<option key={race._id}>{race.name}</option>)
    });

    const classList = this.state.classes.map((c) =>
    {
      return (<option key={c._id}>{c.name}</option>)
    })
    return (
      <div className="PcPage">
        <h3>Adventurers</h3>
          <Row>
            <Col md={4}>
              <ListGroup controlid="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="" placeholder="Enter a name" onChange={this.nameChange}/>
              </ListGroup>
              <span> </span>
              <Form.Group controlid="exampleForm.ControlSelect1">
                <Form.Label>Choose a Race</Form.Label>
                <Form.Control as="select" onClick={this.raceChange}>
                  {raceList}
                </Form.Control>
              </Form.Group>
              <Form.Group controlid="exampleForm.ControlSelect1">
                <Form.Label>Choose a Class</Form.Label>
                <Form.Control as="select" onClick={this.classChange}>
                  {classList}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col md={4}>
            <AbilityScoreGen formField={this.formFieldPcAs} numField={this.formFieldPcAsNum}></AbilityScoreGen>
            </Col>
          </Row>
          <Row>
            <Col md={{span: 4, offset: 3}}>
              <Button onClick={this.submitPc}>Add a Character</Button>
            </Col>
          </Row>
      </div>
    );
  }
}

export default AddPc;