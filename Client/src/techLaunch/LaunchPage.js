import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./launch.css";
const cards = [
  {
    id: 1,
    title: "Card 1",
    videoSrc: require("../Video/Galaxy S23 Ultra_ Official Introduction Film _ Samsung.mp4"),
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "Card 2",
    videoSrc: require("../Video/m1pro.mp4"),
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    title: "Card 3",
    videoSrc: require("../Video/AirPods Pro _ Rebuilt from the sound up _ Apple.mp4"),
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 4,
    title: "Card 1",
    videoSrc: require("../Video/apple watch.mp4"),
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Card = ({ title, videoSrc, text }) => {
  return (
    <>
      <div className="card mb-4">
        <div className="card-body" style={{ padding: "0px" }}>
          <Row>
            <Col md={6}>
              <div className="video-container">
                <video src={videoSrc} controls={false} autoPlay muted loop />
              </div>
            </Col>
            <Col md={6}>
              <h5 className="text-center">{title}</h5>
              <p>{text}</p>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

const LaunchPage = () => {
  return (
    <Container fluid>
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          videoSrc={card.videoSrc}
          text={card.text}
        />
      ))}
    </Container>
  );
};

export default LaunchPage;
