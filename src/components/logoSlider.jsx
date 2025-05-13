import React from "react";
import Slider from "react-slick";
import "../styles/logoSlider.scss";

const LogoSlider = ({ images = [], reverse = false, speed = 3000 }) => {
  const settings = {
    infinite: true,
    speed: 5000, // speed of scroll animation (not autoplay delay)
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // very important for seamless continuous scroll
    cssEase: "linear", // ensures smooth linear movement
    arrows: false,
    pauseOnHover: false,
    rtl: reverse,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="logo-slider-wrapper">
      <div className="logoContent">
        <h2>BEI BRANDS</h2>
      </div>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div className="logo-slide-item" key={index}>
            <img src={img} alt={`Logo ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoSlider;
