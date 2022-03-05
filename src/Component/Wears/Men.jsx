import React from "react";
import { Container, Dropdown, Row, Col } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

const Men = () => {
  return (
    
      <Dropdown >
        <Dropdown.Toggle variant="none">
          Men
              <DropdownMenu className='p-sm-2' style={{width:'800px'}}>
          <Row >
            <Col xs>
                <Dropdown.Item href="#/action-3">Party Wear</Dropdown.Item>
            </Col>
            <Col xs>
              <Dropdown.Item href="#/action-2">Casual Wear</Dropdown.Item>
            </Col>
            <Col xs>
              <Dropdown.Item href="#/action-2">Casual Wear</Dropdown.Item>

            </Col>
            <Col xs>
              <Dropdown.Item href="#/action-2">Casual Wear</Dropdown.Item>

            </Col>
          </Row>
          <Row>
            <Col xs>
                <Dropdown.Item href="#/action-3">Party Wear</Dropdown.Item>
            </Col>
            <Col>
              <Dropdown.Item href="#/action-2">Casual Wear</Dropdown.Item>

            </Col>
            <Col>
              <Dropdown.Item href="#/action-2">Casual Wear</Dropdown.Item>

            </Col>
            <Col>
              <Dropdown.Item href="#/action-2">Casual Wear</Dropdown.Item>

            </Col>
          </Row>
         
              </DropdownMenu>
        </Dropdown.Toggle>
      </Dropdown>
  );
};

export default Men;
