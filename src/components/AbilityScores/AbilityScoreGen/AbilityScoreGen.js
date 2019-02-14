import React , {Component} from 'react';
import { Row, Button, Col, InputGroup, FormControl, Form } from 'react-bootstrap';
import './AbilityScoreGen.css'

class AbilityScoreGen extends Component  {

  scoreChange = (e) =>
  {
    this.props.formField("strength", e);
  }

  render()
  {
    const randNumGen = (min, max) =>
    {
        return Math.random() * (max - min) + min;
    };

    const diceRoll = () =>
    {
      var randNum = randNumGen(3,19);
      var num = Math.round(randNum);
      return num;
    }

    const dicePop = (inputId) =>
    {
      var num = diceRoll();
      var strInput = document.getElementById(inputId);
      strInput.value = num;
      this.props.numField(inputId, num);
    }


    return (
      <div>
        <Row>
          <Col md={6}>
          <Form.Label>Strength</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <Button className="addCharDiceBtn" id="strButton" variant="outline-secondary" onClick={dicePop.bind(this, "strength")}>Roll</Button>
            </InputGroup.Prepend>
            <FormControl aria-describedby="basic-addon1" id="strength" type="number" min="1" max="22" onChange={this.scoreChange}/>
          </InputGroup>
          </Col>
          <Col md={6}>
          <Form.Label>Dexterity</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <Button className="addCharDiceBtn" variant="outline-secondary" onClick={dicePop.bind(this, "dexterity")}>Roll</Button>
            </InputGroup.Prepend>
            <FormControl aria-describedby="basic-addon1" id="dexterity" type="number" min="1" max="22"/>
          </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
          <Form.Label>Constitution</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <Button className="addCharDiceBtn" variant="outline-secondary" onClick={dicePop.bind(this, "constitution")}>Roll</Button>
            </InputGroup.Prepend>
            <FormControl aria-describedby="basic-addon1" id="constitution" type="number" min="1" max="22"/>
          </InputGroup>
          </Col>
          <Col md={6}>
          <Form.Label>Intelligence</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <Button className="addCharDiceBtn" variant="outline-secondary" onClick={dicePop.bind(this, "intelligence")}>Roll</Button>
            </InputGroup.Prepend>
            <FormControl aria-describedby="basic-addon1" id="intelligence" type="number" min="1" max="22"/>
          </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
          <Form.Label>Wisdom</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <Button className="addCharDiceBtn" variant="outline-secondary" onClick={dicePop.bind(this, "wisdom")}>Roll</Button>
            </InputGroup.Prepend>
            <FormControl aria-describedby="basic-addon1" id="wisdom" type="number" min="1" max="22"/>
          </InputGroup>
          </Col>
          <Col md={6}>
          <Form.Label>Charisma</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <Button className="addCharDiceBtn" variant="outline-secondary" onClick={dicePop.bind(this, "charisma")}>Roll</Button>
            </InputGroup.Prepend>
            <FormControl aria-describedby="basic-addon1" id="charisma" type="number" min="1" max="22"/>
          </InputGroup>
          </Col>
        </Row>
      </div>
    )
  }
}

export default AbilityScoreGen;