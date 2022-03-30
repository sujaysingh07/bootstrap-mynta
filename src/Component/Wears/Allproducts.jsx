import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Filter from "./Filter";



const Allproducts = () => {
  let navigate = useNavigate();

  let home = () => {
    navigate("/");
    window.location.reload();
  };
  return (
    <div  id ="breadcrumb">
      <Breadcrumb style={{display:"block"}}>
        <Breadcrumb.Item href="#" onClick={home}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Clothing
        </Breadcrumb.Item>
      </Breadcrumb><br />
      <Filter/>
    </div>
  );
};

export default Allproducts;
