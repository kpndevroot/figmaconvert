import React from "react";
import "./home.css";
import heroImg from "../../../asset/images/svgs/heroimg.svg";
import { Button } from "react-bootstrap";
function Home() {
  return (
    <div className="home">
      <div className="leftDiv home-div">
        <div className="heading-container">
          <h1 className="hero-heading">
            Your Potential <br /> Our{" "}
            <span className="heading-span">Passion</span>
            <br /> By Innovation
          </h1>
          <h1 className="hero-heading"></h1>
          <p className="hero-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper urna
            nunc ullamcorper a, sit tincidunt.
          </p>
          <Button className="getStarted-btn">Get started</Button>
        </div>
      </div>

      <div className="rightDiv home-div">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
}

export default Home;
