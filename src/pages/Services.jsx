import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/services.scss";

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="services">
        <div className="bulb-animation">
          <img src="/assets/services/circle.png" alt=""  className="circle_img"/>
        </div>

      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Services;
