import React ,{ Component } from 'react';
import { Col , Row} from 'react-bootstrap';
import AddWeapon from './AddWeapon/AddWeapon';
import AddItems from './AddItems/AddItems';
import WeaponsBay from './WeaponsBay/weaponsBay';
import './Bags.css';

class Bags extends Component
{
  render ()
  {
    var charProp = this.props.character;
    var reloadPc = this.props.reloadPc;
    var weapons = this.props.weapons;
    var items = this.props.items;
    return (
      <Col md={6} className="bags">
        <h3>Bags</h3>
        <Row>
            <Col md={4}>
              <AddItems character={charProp} reload={reloadPc}/>
            </Col>
            <Col md={{span: 4, offset: 3}}>
              <AddWeapon character={charProp} reload={reloadPc}/>
            </Col>
        </Row>
        <WeaponsBay weapons={weapons} reload={reloadPc} character={charProp} items={items}/>
      </Col>
    );
  }
}

export default Bags;