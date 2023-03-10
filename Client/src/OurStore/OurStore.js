import React from "react";
import { Container } from "react-bootstrap";
import ProductCards from "../ProductCards/ProductCards";
import ProductPage from "../ProductPage/ProductPage";

export default function OurStore() {
  return (
    <>
      <h1
        className="text-black text-center"
        style={{
          fontSize: "70px",
          fontWeigth: "bold",
          color: "black",
        }}
      >
        <h>
          <font color="blue">N</font>
          <font color="green">e</font>
          <font color="red">x</font>
          <font color="black">o</font>
        </h>
      </h1>
      <ProductCards />
    </>
  );
}
