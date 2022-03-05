import React from 'react'
import { Carousel } from 'react-bootstrap'
// import json_data from "../data.json"

const Cara = () => {
    // console.log(json_data.carousel);
    
  return (
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/16/7d22fdcb-e6d2-4f69-980e-b03144ea7d981645029580623-Indian-Wear_Desk.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/18/7bb93f35-48fb-4318-9680-c6a3797f95811645198488041-desktop.gif"
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/16/e7a224ce-0f49-408f-88d3-4379873f520c1645030240702-Bio-Essence_Desk_Baner.jpg"
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/16/11cc5325-37c6-4490-9adb-6f09ccb2a0781637049244895-luxe-banner.jpg"
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/14/e8a6c496-d2e1-4236-8f81-bbc391e065d41644850839089-Running-Shoes_Desk--1-.jpg"
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/14/ea96eb92-73ca-434e-a4e8-12836ba0cf331644850936891-Flats---Heels_Dk.jpg"
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
    
  </Carousel>
  )
}

export default Cara