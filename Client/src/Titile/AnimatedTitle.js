import React from "react";
import "./Title.css";
import { FaStore } from "react-icons/fa";
import { Button } from "react-bootstrap";

function AnimatedTitle() {
  return (
    <div class="container">
      <Button href="/ourstore">
        <h1 class="animated-title" style={{ color: "black" }}>
          Visit Our Store
          <br />
          <FaStore />
        </h1>
      </Button>

      <div class="character-container"></div>
    </div>
  );
}

export default AnimatedTitle;
