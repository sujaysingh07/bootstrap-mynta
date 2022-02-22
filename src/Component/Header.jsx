import React from "react";
import "./header.css"
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="./Myntra.png"
            title="Image from freepnglogos.com"
            alt="Myntra image"
            height="30px"
            // width="30px"
          />
          Myntra
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" height="10px">
          <ul className="navbar-nav p-sm-3">
            <li className="nav-item ">
              <a href="" className="nav-link active">
                HOME
              </a>
            </li>
            <li className="nav-item ">
              <a href="" className="nav-link active">
                MEN
              </a>
            </li>
            <li className="nav-item ">
              <a href="" className="nav-link active">
                WOMEN
              </a>
            </li>
            <li className="nav-item ">
              <a href="" className="nav-link active">
                KIDS
              </a>
            </li>
          </ul>
          <div className="input-group">
            <form class="d-flex">
              <input
              id='search'
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="icons">

          <ul className="navbar-nav px-sm-2">
            <li className="nav-item">
              <i className="bi bi-person"></i>
              <a href="" className="nav-link active " >Profile</a>
            </li>

            <li className="nav-item">
              <i className="bi bi-heart"></i>
              <a href="" className="nav-link active  ">Wishlist</a>
            </li>
            <li className="nav-item">
              <i className="bi bi-bag"></i>
              <a href="" className="nav-link active ">Bag</a>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
