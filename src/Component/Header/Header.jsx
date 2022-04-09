import React, { useState, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import Men from "../Wears/Men";
import Women from "../Wears/Women";
import Kids from "../Wears/Kids";
import Home from "../Wears/Home";
import Beauty from "../Wears/Beauty";
import "./header.css";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";
// import Dealsday from "./Dealsday";
const Header = () => {
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
    <div className="nav">

    <nav className="navbar navbar-expand-lg navbar-light bg-light w-100" id="nav">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="./Myntra.png"
            title="Image from freepnglogos.com"
            alt="Myntra image"
            height="30px"
            // width="30px"
            onClick={home}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="true"
          aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Men />
              {/* console.log('sujay'); */}
            </li>

            <li className="nav-item ">
              <Women />
            </li>
            <li className="nav-item ">
              <Kids />
            </li>
            <li className="nav-item ">
              <Home />
            </li>
            <li className="nav-item ">
              <Beauty />
            </li>
          </ul>
          <div className="input-group">
            <form className="d-flex">
              <input
                id="search"
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
          <div id="icons">
            <ul className=" px-sm-2">
              <li className="nav-item" id="profile">
                <i className="bi bi-person"></i>
                <Profile />
              </li>

              <li className="nav-item" onClick={change}>
                <i className="bi bi-heart"></i>
                <a href="" className="nav-link active  ">
                  Wishlist
                </a>
              </li>
              <li className="nav-item" onClick={bag}>
                <i className="bi bi-bag"></i>
                <a href="" className="nav-link active ">
                  Bag
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
                </div>
  );
};

export default Header;
