import React from "react";
import "./Video.css";

const VideoBanner = () => {
  return (
    <div className="video-banner">
      <video autoPlay loop muted>
        <source src={require("../Video/m1pro.mp4")} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBanner;
