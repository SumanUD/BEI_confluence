import React, { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import "../styles/home.scss";

const Home = () => {

    useEffect(() => {
      const closeNav = () => {
        document.body.classList.toggle("nav-visible");
      };
  
      // Close menu when switching tabs
      closeNav();
    }, [location.pathname]); 
  return (
    <MainLayout>
<div className="home">
  <div className="video-container">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="background-video"
    >
      <source src="/assets/home/homebannervideo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>


  </div>
</div>
    </MainLayout>
  );
};

export default Home;
