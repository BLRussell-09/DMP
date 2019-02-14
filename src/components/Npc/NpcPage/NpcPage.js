import React, {Component} from 'react';
import npcRequests from '../NpcRequests/NpcRequests';
import {Row, Col,} from 'react-bootstrap';
import RaceBar from '../../RaceBar/RaceBar';
import NameBar from '../../NameBar/NameBar';
import AbilityBarNpc from '../../AbilityScores/AbilityBarNpc/AbilityBarNpc';
import {ListGroup} from 'react-bootstrap';
import NpcItemDescription from '../../Bags/ItemDescription/NpcItemDescription';
class NpcPage extends Component
{
  state = {
    character: [],
    item:{}
  }

  componentDidMount()
  {
    npcRequests.getRandomNpc()
    .then((res) =>
    {
      this.setState({character: res});
    }).catch((err) =>
    {
      console.error(err);
    });
  }

  render()
  {
    var character = this.state.character;
    var charClass = this.state.character.playerClasses;
    var abilityScores = this.state.character.abilityScores;
    var abScoreArr = [];
    abScoreArr.push(abilityScores);
    var items = this.state.character.items;
    var compTrigger;
    var descTrigger;

    var descComponent = () =>
    {
      if(this.state.item)
      {
        return (
          <NpcItemDescription item={this.state.item}/>
          );
      }
    }

    var itemComponent = () =>
    {
      return items.map((item)  => {
        const itemClick = () =>
      {
        var tempItem = {...this.state.item};
        tempItem = item;
        this.setState({item: tempItem});
        var card = document.getElementById("itemCard");
        if(this.state.item)
        {
          card.removeAttribute("class");
          console.log('yolo');
        }

      }

        return (
          <div key={item.id}>
            <ListGroup.Item action onClick={itemClick} >
              {item.name}
            </ListGroup.Item>
          </div>
        );
     });
    }


    if (items)
    {
      compTrigger = itemComponent();
      descTrigger = descComponent();
    }

    return (
      <div>
        <NameBar charProp={character} charClass={charClass} />
        <AbilityBarNpc abilities={abilityScores}/>
        <Row>
          <Col md={3}>
            <h3>Bags</h3>
            <ListGroup variant="flush">
              {compTrigger}
            </ListGroup>
          </Col>
          <Col md={3}>
            {descTrigger}
          </Col>
          <Col md={3}>
            <RaceBar charProp={character}/>
          </Col>
        </Row>
      </div>

    )
  }
}

export default NpcPage