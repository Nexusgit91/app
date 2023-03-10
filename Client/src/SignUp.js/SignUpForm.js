import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const history = useHistory();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleSubmit = async (event) => {
    const { name, email, password, confirmpassword } = form;
    event.preventDefault();
    try {
      const response = await fetch("/signup", {
        method: "POST",
        body: JSON.stringify({ name, email, password, confirmpassword }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      if (response.status === 400 || !data) {
        window.alert("signup failed ");
      } else {
        window.alert("signup succeeded");
        history.push("/login");
      }

      //clear the form data
      setForm({
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <Container className="signup-container">
      <h1 className="text-primary">Sign up</h1>
      <Form method="POST" onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername" style={{ fontSize: "20px" }}>
          <Form.Label style={{ marginRight: "65px" }}>
            <FaUser className="icon" /> Username
          </Form.Label>
          <Form.Control
            style={{
              marginLeft: "100px",
              fontSize: "15px",
              marginBottom: "4px",
            }}
            type="text"
            placeholder="Enter username"
            name="name"
            value={form.name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group
          controlId="formEmail"
          style={{ fontSize: "20px", marginTop: "9px" }}
        >
          <Form.Label style={{ marginRight: "105px" }}>
            <FaEnvelope className="icon" /> Email
          </Form.Label>
          <Form.Control
            style={{
              marginLeft: "100px",
              fontSize: "15px",
              marginBottom: "4px",
            }}
            type="email"
            placeholder="Enter email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formPassword" style={{ fontSize: "20px" }}>
          <Form.Label style={{ marginRight: "70px" }}>
            <FaLock className="icon" /> Password
          </Form.Label>
          <Form.Control
            style={{
              marginLeft: "100px",
              fontSize: "15px",
              marginBottom: "4px",
            }}
            type="password"
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group
          controlId="formConfirmPassword"
          style={{ fontSize: "20px" }}
        >
          <Form.Label>
            <FaLock className="icon" /> Confirm password
          </Form.Label>
          <Form.Control
            style={{
              marginLeft: "100px",
              fontSize: "15px",
              marginBottom: "4px",
            }}
            type="password"
            placeholder="Confirm password"
            name="confirmpassword"
            value={form.confirmpassword}
            onChange={handleInputChange}
          />
        </Form.Group>

        <div className="signup-btn-container">
          <Button
            variant="primary"
            type="submit"
            className=" btn-primary bg-primary mt-3"
          >
            Sign up
          </Button>
          <span
            className="login-link"
            style={{ fontSize: "20px", fontWeight: "bold", margin: "17px" }}
          >
            Already have an account? <a href="/login">Log in</a>
          </span>
        </div>
      </Form>
    </Container>
  );
}

export default Signup;
