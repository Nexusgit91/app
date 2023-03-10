import React, { createContext, useContext, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { FaUser, FaLock } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { UserContext } from "../App/App";
import "./Login.css";

function Login() {
  //acquire state and dispatch
  const { state, dispatch } = useContext(UserContext);

  const [email, setemail] = useState("");
  const history = useHistory();
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      if (response.status === 400 || !data) {
        return window.alert("invalid Credentials");
      } else {
        dispatch({ type: "user", payload: true });
        window.alert("Login Success");
        history.push("/");
      }

      setemail("");
      setPassword("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Container className="login-container ">
      <h1 className="text-primary">Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername" style={{ fontSize: "25px" }}>
          <Form.Label>
            <FaUser className="icon" /> User Email
          </Form.Label>
          <Form.Control
            style={{ marginLeft: "100px", fontSize: "18px" }}
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </Form.Group>

        <Form.Group
          controlId="formPassword"
          style={{ marginTop: "19px", fontSize: "25px" }}
        >
          <Form.Label>
            <FaLock className="icon" /> Password
          </Form.Label>
          <Form.Control
            style={{ marginLeft: "100px", fontSize: "18px" }}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className=" btn-primary bg-primary mt-4"
        >
          Submit
        </Button>
      </Form>

      <div style={{ marginRight: "40px" }}>
        <p className="para">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </Container>
  );
}

export default Login;
