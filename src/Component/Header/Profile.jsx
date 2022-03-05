import React from "react";
import { Button, Dropdown, Row, Col } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { useNavigate } from "react-router-dom";

const Men = () => {
  let navigate = useNavigate()
  let login=()=>{
    navigate('./login')
  }
  return (
    
      <Dropdown>
        <Dropdown.Toggle variant="none">
          Profile
              <DropdownMenu className='p-2' style={{width:'400px'}}>
          <Row >
            <Col xs>
                <Dropdown.Item href="#/action-3"> <p className="mx-2">Welcome</p> </Dropdown.Item>
            </Col> 
          </Row>
          <Row>
            <h6 className="mx-5">To access account and manage orders</h6>
          </Row>
          <Row>
            <Button variant="none" className='mx-5' style={{width:'150px',border:'1px solid blue'}} onClick={login}>
            Login/Signup
            </Button>
          </Row>
          <div className="mx-3">
          <Dropdown.Divider />
          <div className="mx-3">

          <Row>Orders</Row>
          <Row>Wishlist</Row>
          <Row>Gift Cards</Row>
          <Row>Contact Us</Row>
          <Row>Myntra Insider</Row>
          <Dropdown.Divider /> 
          <Row>Myntra Credit</Row>
          <Row>Coupens</Row>
          <Row>Saved Cards</Row>
          <Row>Saved Addresses</Row>

          </div>
          </div>

              </DropdownMenu>
        </Dropdown.Toggle>
      </Dropdown>
  );
};

export default Men;
