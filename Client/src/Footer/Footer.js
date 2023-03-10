import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./footer.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import the styles
// const Adidas = require("../src/img/addToCart.webp");
const Adidas = require("../img/adidas.jpg");
const Apple = require("../img/Applelogo.png");
const boat = require("../img/b1.png");
const lg = require("../img/lglogo.png");
const nike = require("../img/nike.png");
const puma = require("../img/PUMA-logo.jpg");
config.autoAddCss = false; // prevent Font Awesome from dynamically adding its CSS to the <head> element

const companies = [
  { icon: Apple },
  { icon: boat },
  { icon: lg },
  { icon: nike },
  { icon: puma },
  { icon: Adidas },
];

const Footer = () => {
  return (
    <div className="container">
      <div className="row">
        {companies.map((company) => (
          <div className="col-lg-2 col-md-4 col-sm-6 mb-4" key={company.name}>
            <div className="card" style={{ border: "none" }}>
              <div className="card-body">
                <img
                  src={company.icon}
                  className="zoom-button"
                  style={{ width: "170px" }}
                ></img>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
