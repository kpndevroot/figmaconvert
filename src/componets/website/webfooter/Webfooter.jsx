import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaLinkedinIn,
  FaInstagram,
  FaGitAlt,
  FaFacebook,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import "./webfooter.css";
function WebFooter() {
  return (
    <footer color="blue" className="WebFooter font-small pt-4 mt-4">
      <Container fluid className="text-center text-md-left">
        <Row>
          <Col md="6">
            <h5 className="title">Contact Us</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
            <div className="socialMedia">
              <div className="Social-div">
                <FaWhatsapp className="social-icon" />
              </div>
              <div className="Social-div">
                <FaInstagram className="social-icon" />
              </div>
              <div className="Social-div">
                <FaFacebook className="social-icon" />
              </div>
              <div className="Social-div">
                <FaLinkedinIn className="social-icon" />
              </div>
              <div className="Social-div">
                <FaGitAlt className="social-icon" />
              </div>
              <div className="Social-div">
                <FaTelegramPlane className="social-icon" />
              </div>
            </div>
          </Col>
          {/* <Col md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </Col> */}
        </Row>
      </Container>
      <div className="footer-copyright text-center py-3">
        <Container>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="#"> kpndevelopments.com </a>
        </Container>
      </div>
    </footer>
  );
}

export default WebFooter;
