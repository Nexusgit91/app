import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../ProductCards/ProductCards";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
