import React from "react";
import { Card} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import json_data from "../data.json";
// import Allproducts from "../Wears/Allproducts";
const Dealsday = () => {
  let navigate = useNavigate()
  return (
    <div className="container-fluid">
      <p className="h1 px-5 my-5">Deals of the day</p>
      
      {json_data.DOTD.map((elem) => {
        return (
          <div key={elem.id} className="row d-inline-block mx-1">
            <Card style={{ display:'inline-flex' ,width: "18rem",border:'none' ,cursor:'pointer' }}>
              <Card.Img variant="top" src={elem.image} loading="lazy" onClick={()=>navigate("/allproducts")}/>
            </Card>
        </div>
        );

      })}
      <p className="h1 px-5 my-5">Bigest Deal On Top Brands</p>
      {
          json_data.BDOTB.map(item=>{
              return(
                <div key={item.id} className="row d-inline-block mx-lg-2">
                <Card style={{ display:'inline-flex' ,width: "22rem",border:'none' ,cursor:'pointer' }}>
                  <Card.Img variant="top" src={item.image} loading="lazy" onClick={()=>navigate("/allproducts")}/>
                </Card>
            </div>
              )
          })
      }
      <p className="h1 px-5 my-5">TRENDING IN ACCESSORIES</p>
      {
          json_data.TIA.map(item=>{
              return(
                <div key={item.id} className="row d-inline-block mx-sm-2">
                <Card style={{ display:'inline-flex' ,width: "17rem",border:'none' ,cursor:'pointer' }}>
                  <Card.Img variant="top" src={item.image} loading="lazy" onClick={()=>navigate("/allproducts")}/>
                </Card>
            </div>
              )
          })
      }
    </div>
  );
};

export default Dealsday;
