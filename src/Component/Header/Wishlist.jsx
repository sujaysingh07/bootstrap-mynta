import React from "react";
import { Card, Row,Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
    let navigate = useNavigate()
  return (
    <div className="container" style={{margin:'20px auto',height:"100vh"}}>
      <Card style={{border:'none',textAlign:'center'}}>
      <Row>
        <h1>PLEASE LOG IN</h1>
        <p>Login to view items in your wishlist.</p>
        <div className="img"></div>
        <div className="button">
          <Button className="btn-btn-primary" onClick={()=>navigate('/login')}>LOGIN</Button>
        </div>
      </Row>
      </Card>
    </div>
  );
};

export default Wishlist;
