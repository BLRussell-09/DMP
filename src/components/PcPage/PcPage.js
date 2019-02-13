import React, {Component} from 'react';
import {Button, Col, ListGroup, Row, ButtonGroup} from 'react-bootstrap';
import firebase from 'firebase';
import dmp from '../../firebase_requests/dmp';
import RaceBar from '../RaceBar/RaceBar';

class PcPage extends Component {
  state =
  {
    pcs: [],
    character: {}
  }
  componentDidMount()
  {
    var pc = '';
    var pcArr = [];
    const trigger = () =>
    {
      this.forceUpdate();
      this.setState({pcs: pcArr});
    }
    firebase.auth().onAuthStateChanged(function(user) {
      if (user)
      {
        pc = user.uid
        dmp.getPcs(pc)
        .then((res) =>
        {
          res.forEach(element =>
          {
            pcArr.push(element);
          });
          trigger();
        }).catch((err) =>
          {
            console.error(err);
        });
      }

    });

  }
  render()
  {

    const pcListItem = this.state.pcs.map((character) =>
    {
        const listItemClick = () =>
      {
        this.props.history.push(`/pc/${character.id}`);
      }

      const listItemHover = () =>
      {
        this.setState({character});
      }

      return ( <Button onClick={listItemClick} onMouseOver={listItemHover} key={character.id}> {character.name} <span className="race">{character.race_name}</span></Button> );
    });

    return (
      <div className="PcPage">
        <h3>Players</h3>
        <Row>
          <Col md={4}>
            <ButtonGroup vertical>
              {pcListItem}
            </ButtonGroup>
          </Col>
          <Col md={4}>
            <Button href="/pc/add">Add a Character</Button>
          </Col>
          <Col md={4}>
            <RaceBar charProp={this.state.character}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default PcPage;