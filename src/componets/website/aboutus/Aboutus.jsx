import React from "react";
import "./aboutus.css";
import aboutImg from "../../../asset/images/svgs/aboutimg.svg";
function Aboutus() {
  return (
    <div className="AboutUs">
      <div className="aboutContainer">
        <div className="imgContainer">
          <img src={aboutImg} alt="" />
        </div>
        <div className="contentContainer">
          <h1 className="about-heading">About Us</h1>
          <p className="aboutPara">
            Tired of searching the pages of a register...? Don't worry our team
            is introducing a solution for your complication. We are living in
            the digital world, we need to act fast and smart, because time is
            precious and rather than we assure your customers sastisfaction.
            dbook, our app offers you a better impression. We believe we can
            help you.. Our prime concern is about your needs. We assure we are
            here for you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
