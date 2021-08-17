import React from "react";
import { Image } from "react-bootstrap";
import "../styling/components/HeroComponent.css";

function HeroComponent() {
  return (
    <div className="hero">
      <h3>
        Welcome to Star Wars <br /> the Clone Wars
      </h3>
      <Image
        src={require("../assets/undraw_To_the_stars_qhyy.svg").default}
        className="hero-image mt-5"
      />
    </div>
  );
}

export default HeroComponent;
