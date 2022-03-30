import React from "react";
import { Form } from "react-bootstrap";

const Brand = () => {
  return (
    <div className=" filter">
      <p style={{ padding: "1px", width: "auto" }}>Brand</p>
      <div className="filter-box">
        <Form style={{ padding: "10px", width: "auto" }}>
          <input
            type="checkbox"
            value="Men"
            name="radio"
            aria-label="Text input with checkbox"
          />
          <label className="py-1">HERE&NOW(182)</label> <br />
          <input
            type="checkbox"
            value="Women"
            name="radio"
            aria-label="Text input with checkbox"
          />
          <label className="py-1">YK Marvel(172)</label>
          <br />
          <input
            type="checkbox"
            value="Boys"
            name="radio"
            aria-label="Text input with checkbox"
          />
          <label className="py-1">HRX by Hrithik Roshan(135)</label> <br />
          <input
            type="checkbox"
            value="Girls"
            name="radio"
            aria-label="Text input with checkbox"
          />
          <label className="py-1">YK(104)
</label>
          <br />
          <input
            type="checkbox"
            value="Girls"
            name="radio"
            aria-label="Text input with checkbox"
          />
          <label className="py-1">YK Disney(71)</label>
          <br />
          <input
            type="checkbox"
            value="Girls"
            name="radio"
            aria-label="Text input with checkbox"
          />
          <label className="py-1">YK Baby(1)</label>
          <br />
        </Form>
        <hr />
      </div>
    </div>
  );
};

export default Brand;
