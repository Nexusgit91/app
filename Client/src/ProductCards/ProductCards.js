import React, { useState } from "react";
import { Card, Button, Row, Col, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ProductCards.css";
import Rating from "react-rating";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const products = [
  {
    id: 1,
    name: "Iphone Pro 7",
    description: "",
    price: 9.99,
    imgSrc: require("../img/AppleWatch.jpg"),
  },
  {
    id: 2,
    name: "Iphone Pro 7",
    description: "",
    price: 19.99,
    imgSrc: require("../img/airdopes.webp"),
  },
  {
    id: 3,
    name: "Iphone Pro 7",
    description: "",
    price: 29.99,
    imgSrc: require("../img/Galaxy-S23.jpg"),
  },
  {
    id: 4,
    name: "Iphone Pro 7",
    description: "",
    price: 29.99,
    imgSrc: require("../img/hhh.jpg"),
  },
  {
    id: 5,
    name: "Iphone Pro 7",
    description: "",
    price: 29.99,
    imgSrc: require("../img/AppleWatch.jpg"),
  },
  {
    id: 6,
    name: "Iphone Pro 7",
    description: "",
    price: 29.99,
    imgSrc: require("../img/AppleWatch.jpg"),
  },
  {
    id: 7,
    name: "Iphone Pro 7",
    description: "",
    price: 29.99,
    imgSrc: require("../img/AppleWatch.jpg"),
  },
];
const ProductCards = ({ onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(products);
  };

  // const [rating, setRating] = React.useState(0);

  return (
    <Row style={{ marginLeft: "20px" }}>
      {products.map((product) => (
        <Col sm={12} md={4} key={product.id}>
          <Card className="product-card">
            <Card.Img variant="top" src={product.imgSrc} />
            <div
              className="rating"
              style={{ justifyContent: "center", marginLeft: "10px" }}
            >
              {/* <Rating
                initialRating={rating}
                emptySymbol={<i className="far fa-star"></i>}
                fullSymbol={<i className="fas fa-star"></i>}
                onChange={(value) => setRating(value)}
              /> */}
            </div>
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>Price: ${product.price}</Card.Text>
              <ButtonGroup>
                <Button
                  variant="secondary"
                  onClick={handleAddToCart}
                  className="zoom-button addCart"
                >
                  <img
                    src={require("../img/addToCart.webp")}
                    width="40"
                    height="40"
                    className="d-inline-block align-top "
                    alt="Search"
                  />
                  <h5 style={{ color: "black" }}> Add to Cart</h5>
                </Button>
                <Link
                  style={{
                    display: "block",
                    marginTop: "10px",
                  }}
                  to={`/products/${product.id}`}
                >
                  <Button className=" zoom-button" variant="secondary">
                    <img
                      src={require("../img/detaillogo.avif")}
                      width="40"
                      height="40"
                      className="d-inline-block align-top"
                      alt="Search"
                    />
                    <h5 style={{ color: "black" }}> View Details</h5>
                  </Button>
                </Link>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ProductCards;
