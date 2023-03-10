import React from "react";
import { Button } from "react-bootstrap";
import { FaShopify, FaStore } from "react-icons/fa";

const CircularButton = () => {
  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <Button
        variant="secondary"
        className="rounded-circle p-4 zoom-effect"
        href="/ourstore"
      >
        <FaStore size={100} fill="black" />
        <span>
          {" "}
          <h1 style={{ color: "black" }}>Visit our Store</h1>{" "}
        </span>
      </Button>
    </div>
  );
};

export default CircularButton;
