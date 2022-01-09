import React from "react";
import "./feature.css";
import { FaLightbulb } from "react-icons/fa";
import { CgPerformance } from "react-icons/cg";
import { MdOutlineSecurity } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import aboutSvg from "../../../asset/images/svgs/featureimg.svg";
function Feature() {
  return (
    <div className="Feature">
      <div className="heading-container">
        <h1 className="feature-heading">
          How we can help your <br /> business?
        </h1>
        <p className="feature-para">
          <br />
          expound the actual teachings of the great explorer and allocate <br />
          fashionable ingredients
        </p>
      </div>
      <div className="feature-container">
        <div className="f-container">
          <div className="list-container">
            {/* feature start */}
            <div className="features">
              <div className="item">
                <div className="mainDiv">
                  <div className="icon">
                    <FaLightbulb className="feature-icon" />
                  </div>
                  <div className="featureContent">
                    <h1>Simplicity</h1>
                    <p>effortless and instinctual </p>
                  </div>
                </div>
              </div>
            </div>
            {/* feature end */}
            {/* feature start */}
            <div className="features">
              <div className="item">
                <div className="mainDiv">
                  <div className="icon">
                    <FaLightbulb className="feature-icon" />
                  </div>
                  <div className="featureContent">
                    <h1>Performance</h1>
                    <p>assures elevated operations without hamper</p>
                  </div>
                </div>
              </div>
            </div>
            {/* feature end */}
            {/* feature start */}
            <div className="features">
              <div className="item">
                <div className="mainDiv">
                  <div className="icon">
                    <FaLightbulb className="feature-icon" />
                  </div>
                  <div className="featureContent">
                    <h1>Security</h1>
                    <p>safe from exterior threats and digital cheaters</p>
                  </div>
                </div>
              </div>
            </div>
            {/* feature end */}
            {/* feature start */}
            <div className="features">
              <div className="item">
                <div className="mainDiv">
                  <div className="icon">
                    <FaLightbulb className="feature-icon" />
                  </div>
                  <div className="featureContent">
                    <h1>User Interface</h1>
                    <p>expound the actual teachings of the great explorer</p>
                  </div>
                </div>
              </div>
            </div>
            {/* feature end */}
          </div>
        </div>
        <div className="feature-img-container">
          <img src={aboutSvg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Feature;
