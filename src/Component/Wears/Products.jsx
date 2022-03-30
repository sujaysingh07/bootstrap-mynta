import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";


const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(function (responce) {
        const data = responce.data;
        setData(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="product" style={{marginLeft:"50px" ,width:"100%"}}>
      {data.map((elem) => {
        return (
          <div style={{display:"inline-block",width:'200px',margin:'10px'}}>
            <Card style={{height:"300px",cursor:"pointer"}}>
              <div className="img" style={{display:'flex',margin:"20px auto"}}>
              <img src={elem.image} alt="" width="100px"/> 
              </div>
              <div className="desc" style={{overflowWrap:"anywhere",wordWrap:"break-word",overflow: "normal",padding:'10px'}}>
                <p>{elem.title}</p>
                
              </div>
              </Card>
              <br />
          </div>
        );
      })}
    </div>
  );
};

export default Products;
