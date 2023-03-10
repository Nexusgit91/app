import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

function NotFoundPage() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mt-5 text-danger">404 Page Not Found</h1>
          <p
            className="lead mx-4"
            style={{ fontSize: "30px", fontWeight: "bold" }}
          >
            We're sorry, the page you requested could not be found.
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

export default NotFoundPage;
