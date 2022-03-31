import { useEffect, useState } from "react";
import Carddesign from "./Carddesign"
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
    <div className="container" style={{ width: "100%",display:"inline-block", justifyContent:"center",alignItmes:'center'}}>
      {data.map((elem) => {
        return (
          <Carddesign elem={elem}/>
        );
      })}
    </div>
  );
};

export default Products;
