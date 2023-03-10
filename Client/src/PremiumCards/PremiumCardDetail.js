import React from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

function ProductDetail() {
  const { id } = useParams();

  // fetch product details based on ID
  const product = {
    name: "Product Name",
    image: require("../img/iphone.jpeg"),
    description: "Product description goes here.",
    price: 9.99,
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 mb-3">
          <Card>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h4>Price: ${product.price}</h4>
          <Button variant="primary" size="lg" className="mt-3">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
