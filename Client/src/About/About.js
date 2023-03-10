import React, { useEffect, useState } from "react";
import "./About.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  const history = useHistory();
  const [data, setData] = useState({});
  const callAboutPage = async () => {
    try {
      const response = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      //give the response in the form of json format;

      const data = await response.json();
      console.log(data);
      setData(data);
      if (!response.status === 200 || !data) {
        const err = new Error(response.error);
        throw err;
      }
    } catch (err) {
      console.log("user is not authenticated");
      window.alert("user is not authenticated");
      //if the user not authenticated
      history.push("/login");
    }
  };
  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <Container className="image-text-container">
      <h1 className="text-primary" style={{ fontSize: "70px" }}>
        About Us
      </h1>
      <Row>
        <Col md={6} className="image-container">
          <img src={require("../img/AppleWatch.jpg")} alt="placeholder" />
        </Col>
        <Col md={6} className="text-container">
          <h1 style={{ color: "black", fontSize: "50px" }}>Name:{data.name}</h1>
          <h1 style={{ color: "black", fontSize: "50px" }}>
            Email:{data.email}
          </h1>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
