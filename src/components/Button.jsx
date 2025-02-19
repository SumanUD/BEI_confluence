import React from "react";
import "../styles/Button_v1.scss";

const Button_v1 = () => {
  return (
    <div className="btn-container">
      <button className="btn-v1 learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">Learn More</span>
      </button>
    </div>
  );
};

export default Button_v1;
