import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Brand from "./Brand";
// import {  } from "react-bootstrap";
import Categories from "./Categories";
import Prices from "./Prices";
import Products from "./Products";


const Filter = () => {
  const [radio, setRadio] = useState("Men");
  let onRadioChange = (event) => {
    setRadio(event.target.value);
  };

  return (
    <div
      className=" filter"
      style={{ display: "inline-flex", width: "300px", height: "163vh" }}
    >
      {/* <label>filter</label> */}
      <div
        className="filter-box"
        style={{
          border: "1px solid grey",
          // width: "300px",
          display: "inline-block",
        }}
      >
        <Form
          style={{ padding: "10px", width: "auto" }}
          onChange={onRadioChange}
        >
          <input
            type="radio"
            value="Men"
            name="radio"
            checked={radio === "Men"}
            aria-label="Text input with checkbox"
          />
          <label className="py-1">Men</label> <br />
          <input
            type="radio"
            value="Women"
            name="radio"
            checked={radio === "Women"}
            aria-label="Text input with checkbox"
          />
          <label className="py-1">Women</label>
          <br />
          <input
            type="radio"
            value="Boys"
            name="radio"
            checked={radio === "Boys"}
            aria-label="Text input with checkbox"
          />
          <label className="py-1">Boys</label> <br />
          <input
            type="radio"
            value="Girls"
            name="radio"
            checked={radio === "Girls"}
            aria-label="Text input with checkbox"
          />
          <label className="py-1">Girls</label>
          <br />
          {/* <Divider/> */}
        </Form>
        <hr />
      <Categories/>
      <Brand/>
      <Prices/>


      </div>
      <Products/>
    </div>
  );
};

export default Filter;
