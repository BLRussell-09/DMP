import React ,{ Component } from 'react';
import { Col , Button} from 'react-bootstrap';
import AddWeapon from './AddWeapon/AddWeapon';
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
        <AddWeapon character={charProp} reload={reloadPc}/>
        <WeaponsBay weapons={weapons} reload={reloadPc} character={charProp} items={items}/>
      </Col>
    );
  }
}

export default Bags;