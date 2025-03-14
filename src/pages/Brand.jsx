import React, { useEffect } from "react";
import $ from "jquery";
// import "magnific-popup/dist/jquery.magnific-popup.min.css";
import "magnific-popup";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/brand.scss";
import VideoGallery from "../components/VideoGallery";
import ImageGallery from "../components/Gallery";

const Brand = () => {
  useEffect(() => {
    $(".video-gallery").magnificPopup({
      delegate: "a",
      type: "iframe",
      gallery: {
        enabled: true
      }
    });
  }, []);

  return (
    <div className="brand1">
      <Navbar />
      <div className="brand"></div>
      <div className="below_banner">
        <VideoGallery />

        <div className="below_banner_content">
          <p>
            Introducing 8PM Premium Black, India’s new benchmark in premium whisky. Crafted as a Master’s Selection, it’s designed for connoisseurs who appreciate the finer things in life. This exceptional blend is a tribute to success, friendship, and the unique camaraderie that even transforms rivals into friends over a shared drink.
            With its premium packaging, 8PM Premium Black exudes international appeal, rivaling the elegance of Scotch whiskies. The crystal-like detailing on the bottle speaks of class and sophistication, making every sip a celebration of taste and style.
          </p>
        </div>
      </div>

      <div className="button_container">
        <button className="brand_button" type="submit">Learn More</button>
      </div>

      <ImageGallery />
      <Footer />
    </div>
  );
};

export default Brand;
