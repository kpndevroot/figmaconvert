import React from "react";
import "./contact.css";
import { FaLightbulb } from "react-icons/fa";

function ContactUs() {
  return (
    <div className="Contact">
      <div className="contact-container">
        <div className="heading-container">
          <h1 className="plan-heading">Contact us</h1>
          <p className="plan-para">
            Feeling stuck? We are ready to help, Contact us.
          </p>
        </div>
        <div className="parent-container">
          <div className="details-container">
            {/* contact item start */}
            <div className="detail-container">
              <div className="logo-container">
                <FaLightbulb className="logo" />
              </div>
              <div className="contentContainer">
                <h2 className="heading">Our Address</h2>
                <h5 className="detail-h">Palakkad,Kerala,India</h5>
              </div>
            </div>
            {/* contact item end */}
            {/* contact item start */}
            <div className="detail-container">
              <div className="logo-container">
                <FaLightbulb className="logo" />
              </div>
              <div className="contentContainer">
                <h2 className="heading">Our Address</h2>
                <h5 className="detail-h">Palakkad,Kerala,India</h5>
              </div>
            </div>
            {/* contact item end */}
            {/* contact item start */}
            <div className="detail-container">
              <div className="logo-container">
                <FaLightbulb className="logo" />
              </div>
              <div className="contentContainer">
                <h2 className="heading">Our Address</h2>
                <h5 className="detail-h">Palakkad,Kerala,India</h5>
              </div>
            </div>
            {/* contact item end */}
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15666.620125183179!2d76.45216223233572!3d10.989389824220684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba87f7f670aa6ad%3A0x3bb7456986f8bc3b!2sMannarkkad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1641736187050!5m2!1sen!2sin"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
