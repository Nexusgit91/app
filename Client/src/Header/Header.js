import React, { useContext, useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import {
  NavDropdown,
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import "./Header.css";
import { UserContext } from "../App/App";
function Header() {
  const { state, dispatch } = useContext(UserContext);
  const [data, setData] = useState();
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState(true);

  const callAboutPage = async () => {
    try {
      const response = await fetch("/getUser", {
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
      setShow(true);
      setLogin(false);
    } catch (err) {
      console.log("please login");
    }
  };
  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <Navbar
      expand="lg"
      style={{
        backgroundColor: "white",
        fontWeight: "bold",
        color: "white",
      }}
    >
      <Container>
        <Navbar.Brand
          href="/"
          style={{
            fontWeight: "bold",
            fontSize: "22px",
            margin: "0px",
            padding: "0px",
          }}
        >
          <h>
            <font color="blue">N</font>
            <font color="green">e</font>
            <font color="red">x</font>
            <font color="black">o</font>
          </h>
          {/*     
          <h style={{ color: "blue" }}>N</h> <h style={{ color: "green" }}>e</h>{" "}
          <h style={{ color: "red" }}>x</h> <h style={{ color: "black" }}>o</h> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto px-5 ">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/ourstore">Shop</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Category 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Category 2</NavDropdown.Item>
              <NavDropdown.Item href="#">Category 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">All Categories</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/techlaunch">Launch </Nav.Link>
            <Nav.Link href="/about">{!login ? "About" : ""}</Nav.Link>

            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex mb-0" style={{ width: "355px" }}>
            <FormControl
              type="search"
              style={{ fontWeight: "bold", marginTop: "4px" }}
              placeholder="Search the item"
              className="mr-2 "
              aria-label="Search"
            />
            <Button style={{ border: "none", backgroundColor: "white" }}>
              <img
                src={require("../img/Search-512.webp")}
                width="25"
                height="25"
                className="d-inline-block align-top btnSearch"
                alt="Search"
              />
            </Button>
          </Form>
          <Nav className="ms-auto">
            <Nav.Link href="#">
              <FaShoppingCart size={20} /> Cart
            </Nav.Link>

            <Nav.Link href="/login">{login ? "Login" : data.name}</Nav.Link>
            <Nav.Link href="/logout">{!login ? "logout" : ""}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
