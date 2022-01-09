import React from "react";
import Aboutus from "./aboutus/Aboutus";
import ContactUs from "./contactus/ContactUs";
import Feature from "./features/Feature";
import Home from "./home/Home";
import Navigate from "./nav/Navigate";
import Plan from "./plans/Plan";
import Webfooter from "./webfooter/Webfooter";
function Website() {
  return (
    <div>
      <Navigate />
      <Home id="home" />
      <Aboutus id="aboutus" />
      <Feature id="feature" />
      <Plan id="plan" />
      <ContactUs id="contactUs" />
      <Webfooter />
    </div>
  );
}

export default Website;
