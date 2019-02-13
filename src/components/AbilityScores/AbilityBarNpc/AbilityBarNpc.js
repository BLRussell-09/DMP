import React, {Component} from 'react';
import {Row, Card, Col} from 'react-bootstrap'

class AbilityBarNpc extends Component
{
state =
{
  abs: []
}

  render()
  {
    let myComponent;
    if(this.props.abilities) {
      var abilityScores = this.props.abilities
      var abilityMod = (num) =>
      {
         return Math.floor((num - 10)/2);
      };
      var strMod = abilityMod(abilityScores.strength);
      var dexMod = abilityMod(abilityScores.dexterity);
      var conMod = abilityMod(abilityScores.constitution);
      var intMod = abilityMod(abilityScores.intelligence);
      var wisMod = abilityMod(abilityScores.wisdom);
      var chaMod = abilityMod(abilityScores.charisma);

        myComponent = <div><Row>
        <Col md={2}>
          <Card bg="primary" text="white" style={{ width: '9rem' }}>
            <Card.Header>Strength</Card.Header>
            <Card.Body>
              <Card.Title>{strMod}</Card.Title>
              <Card.Text>
                  {abilityScores.strength}
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
                  {abilityScores.dexterity}
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
                  {abilityScores.constitution}
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
                  {abilityScores.intelligence}
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
                  {abilityScores.wisdom}
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
                  {abilityScores.charisma}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
    } else {
        myComponent = null
    }
    // const ability = this.props.abScoreArr.map((a) =>
    // {
    //   return (
    //     <div>Y</div>
    //   )
    // });
      return (
        <div>{myComponent}</div>
      );
  }
}

export default AbilityBarNpc;