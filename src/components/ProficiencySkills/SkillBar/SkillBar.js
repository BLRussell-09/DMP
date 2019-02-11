import React, {Component} from 'react';
import {InputGroup, Button, Dropdown, ListGroup, Row, Col} from 'react-bootstrap';
import DropdownMenu from 'react-bootstrap/DropdownMenu';
import './SkillBar.css';

class SkillBar extends Component
{

  render()
  {
    var skillProps = this.props.skills;
    var skills = Object.keys(skillProps);

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
                      <Button variant="outline-secondary">{skills[0]}</Button>
                    </InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                  </InputGroup>
                </ListGroup.Item>
                <ListGroup.Item>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <Button variant="outline-secondary">{skills[1]}</Button>
                    </InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                  </InputGroup>
                </ListGroup.Item>
                <ListGroup.Item>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <Button variant="outline-secondary">{skills[2]}</Button>
                    </InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                  </InputGroup>
                </ListGroup.Item>
                <ListGroup.Item>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <Button variant="outline-secondary">{skills[3]}</Button>
                    </InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                  </InputGroup>
                </ListGroup.Item>
                <ListGroup.Item>
                  <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <Button variant="outline-secondary">{skills[4]}</Button>
                  </InputGroup.Prepend>
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                </InputGroup>
                </ListGroup.Item>
                <ListGroup.Item>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <Button variant="outline-secondary">{skills[5]}</Button>
                    </InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                  </InputGroup>
                </ListGroup.Item>
                <ListGroup.Item>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <Button variant="outline-secondary">{skills[6]}</Button>
                    </InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                  </InputGroup>
                </ListGroup.Item>
                <ListGroup.Item>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <Button variant="outline-secondary">{skills[7]}</Button>
                    </InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                  </InputGroup>
                </ListGroup.Item>
                <ListGroup.Item>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <Button variant="outline-secondary">{skills[8]}</Button>
                    </InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                  </InputGroup>
                </ListGroup.Item>
                <ListGroup.Item>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <Button variant="outline-secondary">{skills[9]}</Button>
                    </InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                  </InputGroup>
                </ListGroup.Item>
                <ListGroup.Item>
                  <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <Button variant="outline-secondary">{skills[10]}</Button>
                  </InputGroup.Prepend>
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                </InputGroup>
                </ListGroup.Item>
                <ListGroup.Item>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <Button variant="outline-secondary">{skills[11]}</Button>
                    </InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                  </InputGroup>
                </ListGroup.Item>
                <ListGroup.Item>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <Button variant="outline-secondary">{skills[12]}</Button>
                    </InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                  </InputGroup>
                </ListGroup.Item>
                <ListGroup.Item>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <Button variant="outline-secondary">{skills[13]}</Button>
                    </InputGroup.Prepend>
                    <InputGroup.Checkbox aria-label="Checkbox for following text input" />
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