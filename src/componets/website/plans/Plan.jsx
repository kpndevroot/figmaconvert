import React from "react";
import { Button } from "react-bootstrap";
import { TiTick } from "react-icons/ti";

import "./plan.css";
function Plan() {
  return (
    <div className="Plans">
      {/* <h1>plan</h1> */}
      <div className="plans-container">
        <div className="heading-container">
          <h1 className="plan-heading">Plans</h1>
          <p className="plan-para">
            But I must explain to you how all this mistaken idea of denouncing{" "}
            <br />
            pleasure and praising pain was born and I will give you a complete{" "}
            <br />
            account of the system
          </p>
        </div>
        <div className="card-deck">
          {/* card started */}
          <div className="card plan-card">
            <h3 className="plan-name">Base</h3>
            <p className="plan-desc">For small businesses , shorter duration</p>

            <h2 className="plan-price">₹500</h2>
            <Button className="card-btn">Contact Us</Button>
            <h4 className="included-head">what included</h4>
            <div className="plan-feature-container">
              <div className="plan-feature-item">
                <TiTick className="tick-icon" />
                <h5 className="plan-feature">30 days</h5>
              </div>
              <div className="plan-feature-item">
                <TiTick className="tick-icon" />
                <h5 className="plan-feature">Feature One</h5>
              </div>{" "}
              <div className="plan-feature-item">
                <TiTick className="tick-icon" />
                <h5 className="plan-feature">Save</h5>
              </div>
            </div>
          </div>
          {/* card ended */}
          {/* card started */}
          <div className="card plan-card">
            <h3 className="plan-name">Base</h3>
            <p className="plan-desc">For small businesses , shorter duration</p>

            <h2 className="plan-price">₹500</h2>
            <Button className="card-btn">Contact Us</Button>
            <h4 className="included-head">what included</h4>
            <div className="plan-feature-container">
              <div className="plan-feature-item">
                <TiTick className="tick-icon" />
                <h5 className="plan-feature">30 days</h5>
              </div>
              <div className="plan-feature-item">
                <TiTick className="tick-icon" />
                <h5 className="plan-feature">Feature One</h5>
              </div>{" "}
              <div className="plan-feature-item">
                <TiTick className="tick-icon" />
                <h5 className="plan-feature">Save</h5>
              </div>
            </div>
          </div>
          {/* card ended */}
          {/* card started */}
          <div className="card plan-card">
            <h3 className="plan-name">Base</h3>
            <p className="plan-desc">For small businesses , shorter duration</p>

            <h2 className="plan-price">₹500</h2>
            <Button className="card-btn">Contact Us</Button>
            <h4 className="included-head">what included</h4>
            <div className="plan-feature-container">
              <div className="plan-feature-item">
                <TiTick className="tick-icon" />
                <h5 className="plan-feature">30 days</h5>
              </div>
              <div className="plan-feature-item">
                <TiTick className="tick-icon" />
                <h5 className="plan-feature">Feature One</h5>
              </div>{" "}
              <div className="plan-feature-item">
                <TiTick className="tick-icon" />
                <h5 className="plan-feature">Save</h5>
              </div>
            </div>
          </div>
          {/* card ended */}
        </div>
      </div>
    </div>
  );
}

export default Plan;
