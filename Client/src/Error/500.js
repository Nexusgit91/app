import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

function ServerErrorPage() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mt-5  mx-3 text-danger">500 Server Error</h1>
          <p className="lead" style={{ fontSize: "30px", fontWeight: "bold" }}>
            We're sorry, there was a problem processing your request.
          </p>
          <Link to="/">
            <Button variant="primary" className="bg-primary">
              Go back to home
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default ServerErrorPage;
