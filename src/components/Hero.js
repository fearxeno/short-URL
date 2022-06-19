import React from "react";
import picture from "../images/illustration-working.svg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <img src={picture} alt="" srcset="" className="image" />
      <div className="hero-item">
        <h1 className="title">More than just shorter links</h1>
        <p className="desc">
          Build your brands's recognition and get detailed insights on how your
          links are performing
        </p>
        <div>
          <button className="button">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
