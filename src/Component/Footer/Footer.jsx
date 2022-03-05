import React from 'react'
import { Col, Row } from 'react-bootstrap'
import "./footer.css"

const Footer = () => {
  return (
    <div className="container" id="footer">
        <Row>
            <Col><a href="">ONLINE SHOPPING</a></Col>
            <Col><a href="">USEFUL LINKS</a></Col>
            <Col><a href="">EXPERIENCE MYNTRA APP ON MOBILE</a></Col>
            <Col><p>Some images</p></Col>
        </Row>
        <Row><Col>Men</Col>
        <Col>Contact Us</Col>
        <Col><img src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt="" width="40%"/>
        <img src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt="" width="40%"/></Col></Row>
        <Row><Col>Women</Col>
        <Col>FAQ</Col>
        </Row>
        <Row><Col>Kids</Col>
        <Col>T&C</Col></Row>
        <Row>
            <Col>Home&Living</Col>
            <Col>Terms Of Use</Col>
        </Row>
        <Row>
            <Col>Beauty</Col>
            <Col>Track Orders</Col>
        </Row>
    </div>
  )
}

export default Footer