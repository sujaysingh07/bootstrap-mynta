import React from "react";
import { Form } from "react-bootstrap";

const Categories = () => {
  return (
    <div className=" filter">
      <p style={{ padding: "1px", width: "auto" }}>CATEGORIES</p>
      <div className="filter-box">
        <Form style={{ padding: "10px", width: "auto" }}>
          <input
            type="checkbox"
            value="Men"
            name="radio"
            aria-label="Text input with checkbox"
          />
          <label className="py-1">Track Pants(130)</label> <br />
          <input
            type="checkbox"
            value="Women"
            name="radio"
            aria-label="Text input with checkbox"
          />
          <label className="py-1">Tshirts(127)</label>
          <br />
          <input
            type="checkbox"
            value="Boys"
            name="radio"
            aria-label="Text input with checkbox"
          />
          <label className="py-1">Shorts(83)</label> <br />
          <input
            type="checkbox"
            value="Girls"
            name="radio"
            aria-label="Text input with checkbox"
          />
          <label className="py-1">Backpacks(31)</label>
          <br />
          <input
            type="checkbox"
            value="Girls"
            name="radio"
            aria-label="Text input with checkbox"
          />
          <label className="py-1">Caps(22)</label>
          <br />
          <input
            type="checkbox"
            value="Girls"
            name="radio"
            aria-label="Text input with checkbox"
          />
          <label className="py-1">Duffel Bag(10)</label>
          <br />
          <input
            type="checkbox"
            value="Girls"
            name="radio"
            aria-label="Text input with checkbox"
          />
          <label className="py-1">Tracksuits(8)</label>
          <br />
          <input
            type="checkbox"
            value="Girls"
            name="radio"
            aria-label="Text input with checkbox"
          />
          <label className="py-1">Socks(9)</label>
          <br />
        </Form>
        <hr />
      </div>
    </div>
  );
};

export default Categories;
