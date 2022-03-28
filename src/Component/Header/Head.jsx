import React, { useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import Men from "../Wears/Men";
import Women from "../Wears/Women";
import Kids from "../Wears/Kids";
import Home from "../Wears/Home";
import Beauty from "../Wears/Beauty";
import "./header.css";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar
} from "react-bootstrap";

const Head = () => {
  let navigate = useNavigate();
  let change = () => {
    navigate("/wishlist");
  };
  let home = () => {
    navigate("/");
    window.location.reload();
  };
  let bag = () => {
    navigate("/bag");
  };
  useEffect(() => {
    if (window.location.pathname === "/login") {
      document.getElementById("profile").style.display = "none";
    } else {
      document.getElementById("nav").style.display = "block";
    }
  });
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" id="nav">
      <Container fluid>
        <Navbar.Brand href="#home">
          {" "}
          <img
            src="./Myntra.png"
            title="Image from freepnglogos.com"
            alt="Myntra image"
            height="30px"
            // width="30px"
            onClick={home}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"><Men /></Nav.Link>
            <Nav.Link href="#pricing"><Women /></Nav.Link>
            <Nav.Link href="#pricing"><Home /></Nav.Link>
            <Nav.Link href="#pricing"><Beauty /></Nav.Link>
            <Nav.Link href="#pricing"><Kids /></Nav.Link>
          </Nav>
          <Form className="d-inline-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav>
            {/* <div className="icons"> */}

            <Nav.Link href="#profile" id="profile" className="icons" >
            <i className="bi bi-person"></i>
                <Profile /></Nav.Link>
            <Nav.Link eventKey={2} id="heart" active href="#memes" onClick={change}>
            <i className="bi bi-heart"></i>

            Wishlist
            </Nav.Link>
            <Nav.Link id="bag" eventKey={3} active href="" onClick={bag}>
            <i className="bi bi-bag"></i>

            Bag
            </Nav.Link>
            {/* </div> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Head;
