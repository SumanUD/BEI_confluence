import React from "react";
import "../styles/logoSlider.scss";

const LogoSlider = ({ width, height, imageQuantity, images, reverse = false }) => {
  return (
    <div
      className="slider"
      style={{
        "--width": `${width}px`,
        "--height": `${height}px`,
        "--imageQuantity": imageQuantity,
      }}
      data-reverse={reverse}
    >
      <div className="list">
        {images.slice(0, imageQuantity).map((img, index) => (
          <div className="item" key={index}>
            <img src={img} alt={`Slider Item ${index}`} />
          </div>
        ))}

        {/* Duplicate images for seamless looping */}
        {images.slice(0, imageQuantity).map((img, index) => (
          <div className="item" key={`dup-${index}`}>
            <img src={img} alt={`Slider Item ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
