import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
// import Header from "./Component/Header/Header";
import Homepage from "./Component/Header/Homepage";
import Wishlist from "./Component/Header/Wishlist";
import Bag from "./Component/Header/Bag";
import Login from "./Component/Login/Login";
import Allproducts from "./Component/Wears/Allproducts";
import Footer from "./Component/Footer/Footer";
import Head from "./Component/Header/Head";


// import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Head/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/bag" element={<Bag/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/allproducts" element={<Allproducts/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
