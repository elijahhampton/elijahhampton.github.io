import React from "react";
import "./styles.css";

import ServiceOfferings from "../ServiceOfferings/ServiceOfferings";
import NavBar from "../NavBar/NavBar";
import Button from "../Button/Button";

const HeroSection = () => {
  return (
    <div className="hero-section d-flex flex-column align-items-center justify-content-evenly">
      <div className="overlay d-flex flex-column flex-md-row justify-content-evenly">
        <div className="p-5 d-flex flex-column align-items-center align-items-md-start justify-content-center">
          <p style={{color: '#fff'}} className="text-center text-md-start fs-1 fs-md-6">
            Elijah Hampton is{" "}
            <span style={{ color: "#3495eb" }}>
              fullstack software engineer
            </span>{" "}
            interested in Web3 and DeFi, content creator, and UI/UX designer.
          </p>
          <Button outlined>Check out my latest work</Button>
        </div>
        <ServiceOfferings />
        <NavBar />
      </div>
    </div>
  );
};

export default HeroSection;
