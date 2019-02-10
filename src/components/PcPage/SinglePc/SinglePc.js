import React, {Component}from 'react';
import pcRequests from '../requests/pcRequests';
import {Card, Col, Row} from 'react-bootstrap';

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

  render()
  {
    const nameBar = this.state.character.map((character) =>
    {
      return (
        <h3>{character.name}</h3>
      );
    });

    const abilityScores = this.state.character.map((character) =>
    {
      var scoreList = character.abilityScores;

      var abilityMod = (num) =>
      {
         return Math.floor((num - 10)/2);
      };
      var strMod = abilityMod(scoreList.strength);
      var dexMod = abilityMod(scoreList.dexterity);
      var conMod = abilityMod(scoreList.constitution);
      var intMod = abilityMod(scoreList.intelligence);
      var wisMod = abilityMod(scoreList.wisdom);
      var chaMod = abilityMod(scoreList.charisma);
      return (
        <Row>
          <Col md={2}>
            <Card bg="primary" text="white" style={{ width: '9rem' }}>
              <Card.Header>Strength</Card.Header>
              <Card.Body>
                <Card.Title>{strMod}</Card.Title>
                <Card.Text>
                    {scoreList.strength}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card bg="primary" text="white" style={{ width: '9rem' }}>
              <Card.Header>Dexterity</Card.Header>
              <Card.Body>
                <Card.Title>{dexMod}</Card.Title>
                <Card.Text>
                    {scoreList.dexterity}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card bg="primary" text="white" style={{ width: '9rem' }}>
              <Card.Header>Constitution</Card.Header>
              <Card.Body>
                <Card.Title>{conMod}</Card.Title>
                <Card.Text>
                    {scoreList.constitution}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card bg="primary" text="white" style={{ width: '9rem' }}>
              <Card.Header>Intelligence</Card.Header>
              <Card.Body>
                <Card.Title>{intMod}</Card.Title>
                <Card.Text>
                    {scoreList.intelligence}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card bg="primary" text="white" style={{ width: '9rem' }}>
              <Card.Header>Wisdom</Card.Header>
              <Card.Body>
                <Card.Title>{wisMod}</Card.Title>
                <Card.Text>
                    {scoreList.wisdom}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={2}>
            <Card bg="primary" text="white" style={{ width: '9rem' }}>
              <Card.Header>Charisma</Card.Header>
              <Card.Body>
                <Card.Title>{chaMod}</Card.Title>
                <Card.Text>
                    {scoreList.charisma}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )
    })

    return (
      <div>
        {nameBar}
        {abilityScores}
      </div>
    );
  }
}

export default SinglePc;