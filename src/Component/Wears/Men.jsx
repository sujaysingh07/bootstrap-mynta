import React from "react";
import { Dropdown, Row, Col } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import "./men.css"

const Men = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="none">
        Men
        <DropdownMenu className="p-2" style={{ width: "1200px" }}>
          <Row>
            <Col style={{width:"200px"}}>
              <Dropdown.Item style={{ color: "red" }} className="dropdownItem" href="#/action-3">
                Top Wear
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">T-shirts</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Casual shirts</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Formal shirts</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Sweat shirts</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Sweaters</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Jackets</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Blazers & Coats</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Suits</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Rain Jackets</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item style={{ color: "red" }} href="#/action-3">
                Indian & Festive Wear
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Kurtas & Kurta Sets
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">Sherwanis</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Nehru Jackets</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Dhotis</Dropdown.Item>
            </Col>
            <Col>
              <Dropdown.Item style={{ color: "red" }} href="#/action-3">
                Bottomwear
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">Jeans</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Casual Trousers</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Formal Trousers</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Sweat shirts</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Shorts</Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Track Pants & Joggers
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-3" style={{ color: "red" }}>
                Innerwear & Sleepwear
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">Briefs & Trunks</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Boxers</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Vests</Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Sleepwear & Loungewear
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">Thermals</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Plus Size</Dropdown.Item>
            </Col>

            <Col>
              <Dropdown.Item style={{ color: "red" }} href="#/action-2">
                Footwear
              </Dropdown.Item>

              <Dropdown.Item href="#/action-2">Casual Shoes</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Sports Shoes</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Formal Shoes</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Sneakers</Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Sandals & Floaters
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">Flip Flops</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Socks</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Blazers & Coats</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Suits</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Rain Jackets</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item style={{ color: "red" }} href="#/action-3">
                Personal Care & Grooming
              </Dropdown.Item>
              <Dropdown.Item style={{ color: "red" }} href="#/action-3">
                Sunglasses & Frames
              </Dropdown.Item>
              <Dropdown.Item style={{ color: "red" }} href="#/action-3">
                Watches
              </Dropdown.Item>
            </Col>
            <Col>
              <Dropdown.Item style={{ color: "red" }} href="#/action-2">
                Sports & Active Wear
              </Dropdown.Item>

              <Dropdown.Item href="#/action-2">Sports Shoes</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Sports Sandals</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Active T-Shirts</Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Track Pants & Shorts
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">Tracksuits</Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Sports Accessories
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">Swimwear</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item style={{ color: "red" }} href="#/action-3">
                Gadgets
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">Smart Wearables</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Fitness Gadgets</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Headphones</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Speakers</Dropdown.Item>
            </Col>
            <Col>
              <Dropdown.Item style={{ color: "red" }} href="#/action-2">
                Fashion Accessories
              </Dropdown.Item>

              <Dropdown.Item href="#/action-2">Wallets</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Belts</Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Perfumes & Body Mists
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">Trimmers</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Deodorants</Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Ties, Cufflinks & Pocket Squares
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Accessory Gift Sets
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">Caps & Hats</Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                Mufflers, Scarves & Gloves
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">Phone Cases</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Rings & Wristwear</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Helmets</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item style={{ color: "red" }} href="#/action-3">
                Bags & Backpacks
              </Dropdown.Item>
              <Dropdown.Item style={{ color: "red" }} href="#/action-3">
                Luggages & Trolleys
              </Dropdown.Item>
            </Col>
          </Row>
        </DropdownMenu>
      </Dropdown.Toggle>
    </Dropdown>
  );
};

export default Men;
