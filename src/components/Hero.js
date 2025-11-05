import React from "react";
import "../styles/Hero.css";
import backgroundVideo from "../background.mp4";

function Hero() {
  return (
    <section id="home" className="hero">
      <video
        className="hero-video"
        src={backgroundVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>
          <span className="small-text">Prime Team,</span> <br />
          <span className="big-text">Prime Solution!</span>
        </h1>
        <button
          onClick={() =>
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Learn More
        </button>
      </div>
    </section>
  );
}

export default Hero;
