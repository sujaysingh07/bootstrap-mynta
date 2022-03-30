import React from "react";
import { Form } from "react-bootstrap";

const Prices = () => {
  return (
    <div className=" filter">
      <p style={{ padding: "1px", width: "auto" }}>Prices</p>
      <div className="filter-box">
        <Form style={{ padding: "5px", width: "auto" }}>
          <input
            type="checkbox"
            value="Men"
            name="radio"
            aria-label="Text input with checkbox"
          />
          <label className="py-1">Rs. 223 to Rs. 542(118)</label> <br />
          <input
            type="checkbox"
            value="Women"
            name="radio"
            aria-label="Text input with checkbox"
          />
          <label className="py-1">Rs. 542 to Rs. 861(6)
</label>
          <br />
          <input
            type="checkbox"
            value="Boys"
            name="radio"
            aria-label="Text input with checkbox"
          />
          <label className="py-1">Rs. 861 to Rs. 1180(2)
</label> <br />
          <input
            type="checkbox"
            value="Girls"
            name="radio"
            aria-label="Text input with checkbox"
          />
          <label className="py-1">Rs. 1180 to Rs. 1499(1)
</label>
          <br />
        </Form>
        {/* <hr /> */}
      </div>
    </div>
  );
};

export default Prices;
