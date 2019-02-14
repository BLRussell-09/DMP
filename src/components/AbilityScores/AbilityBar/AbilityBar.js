import React, {Component} from 'react';
import {Row, Card, CardGroup} from 'react-bootstrap'
import './AbilityBar.css'

class AbilityBar extends Component
{

  render()
  {
    var abilityScores = this.props.abilityScores;
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
      return (
        <Row className="absCard justify-content-center">
          <CardGroup>

            <Card text="black" style={{ width: '9rem', height: '7rem'}} className="absCardInner">
              <Card.Header>Strength</Card.Header>
              <Card.Body>
                <Card.Title>{strMod}</Card.Title>
                <Card.Text>
                    {abilityScores.strength}
                </Card.Text>
              </Card.Body>
            </Card>


            <Card text="black" style={{ width: '9rem', height: '7rem'}} className="absCardInner">
              <Card.Header>Dexterity</Card.Header>
              <Card.Body>
                <Card.Title>{dexMod}</Card.Title>
                <Card.Text>
                    {abilityScores.dexterity}
                </Card.Text>
              </Card.Body>
            </Card>


            <Card text="black" style={{ width: '9rem', height: '7rem'}} className="absCardInner">
              <Card.Header>Constitution</Card.Header>
              <Card.Body>
                <Card.Title>{conMod}</Card.Title>
                <Card.Text>
                    {abilityScores.constitution}
                </Card.Text>
              </Card.Body>
            </Card>


            <Card text="black" style={{ width: '9rem', height: '7rem'}} className="absCardInner">
              <Card.Header>Intelligence</Card.Header>
              <Card.Body>
                <Card.Title>{intMod}</Card.Title>
                <Card.Text>
                    {abilityScores.intelligence}
                </Card.Text>
              </Card.Body>
            </Card>


            <Card text="black" style={{ width: '9rem', height: '7rem'}} className="absCardInner">
              <Card.Header>Wisdom</Card.Header>
              <Card.Body>
                <Card.Title>{wisMod}</Card.Title>
                <Card.Text>
                    {abilityScores.wisdom}
                </Card.Text>
              </Card.Body>
            </Card>


            <Card text="black" style={{ width: '9rem', height: '7rem'}} className="absCardInner">
              <Card.Header>Charisma</Card.Header>
              <Card.Body>
                <Card.Title>{chaMod}</Card.Title>
                <Card.Text>
                    {abilityScores.charisma}
                </Card.Text>
              </Card.Body>
            </Card>

          </CardGroup>
        </Row>
      );
  }
}

export default AbilityBar;