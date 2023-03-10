import { Container, Row, Col, Card } from "react-bootstrap";
import React from "react";
const cardData = [
  { id: 1, title: "Card 1", image: require("../img/HEADPHONE.jpg") },
  { id: 2, title: "Card 2", image: require("../img/HEADPHONE.jpg") },
  { id: 3, title: "Card 3", image: require("../img/HEADPHONE.jpg") },
  { id: 4, title: "Card 4", image: require("../img/HEADPHONE.jpg") },
];

const PremiumCards = () => {
  return (
    <Container style={{ marginLeft: "20px" }}>
      <Row>
        {cardData.map((card) => (
          <Col md={6} lg={3} key={card.id}>
            <Card>
              <Card.Img variant="top" src={card.image} />
              <Card.ImgOverlay>
                <Card.Title>{card.title}</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PremiumCards;
