import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import ReactPlayer from "react-player";

var path = process.env.PUBLIC_URL;
var image = "/videos/video-1.mp4";
console.log(path + image);
function HeroSection() {
  return (
    <div className="hero-container">
      <ReactPlayer
        className="video-player"
        url={path + image}
        muted={true}
        loop
        playing={true}
      />

      <h1>NATURE AWAITS</h1>
      <p>Reinvent your life...</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
