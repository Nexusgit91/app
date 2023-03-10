import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const history = useHistory();
  const [fdata, setfData] = useState({ name: "", email: "", message: "" });
  const getUser = async () => {
    try {
      const response = await fetch("/getUser", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      //give the response in the form of json format;

      const data = await response.json();
      console.log(data);
      setfData({ ...fdata, name: data.name, email: data.email });
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
    getUser();
  }, []);

  ///
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setfData({ ...fdata, [name]: value });
  };

  const submitHandler = async (e) => {
    const { name, email, message } = fdata;
    e.preventDefault();
    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();
    if (!data) {
      console.log("message could not send");
    } else {
      alert("message sent");
      setfData({ ...fdata, message: "" });
      history.push("/");
    }
  };

  return (
    <div className="contact-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form method="POST">
              <h1 className="text-center mb-5 text-primary">Get In Touch</h1>
              <Form.Group controlId="formName">
                <Form.Label className="label">Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  className="formContact"
                  name="name"
                  onChange={handleChange}
                  value={fdata.name}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label className="label">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="formContact"
                  name="email"
                  onChange={handleChange}
                  value={fdata.email}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label className="label">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  className="formContact"
                  placeholder="Enter your message"
                  name="message"
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={submitHandler}>
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
