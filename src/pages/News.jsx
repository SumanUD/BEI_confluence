import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/news.scss";
import { useEffect, useState } from "react";
import Slider from "react-slick";

const News = () => {

  const [loading, setLoading] = useState(true);
  const handleLoadingScreen = (action) => {
    setTimeout(() => {
      setLoading(action)
    }, 2500);
  }
  handleLoadingScreen(false)
  
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
  };


  return (
    <>
      {
        loading && 
        <div className="loadingScreen">
          <img src="/assets/gif/BEI_logo.gif" alt="" />
        </div>
      }
      <Navbar />
      <div className="news">
        <img src="assets/news/news.png" alt="img" className="img1" />
        <img src="assets/news/tag.jpg" alt="img" className="img2" />
        <div className="news-slider">
          <Slider {...sliderSettings} className="brand-slider">
            <div className="slide">
              <div className="slide-image">          
                <h2 className="text">Title</h2>           
                <img 
                  src='/assets/8PM_banner.jpg'
                  alt="" 
                  loading="lazy"
                  decoding="async"
                  fetchPriority="high"                  
                />
              </div>
            </div>
            
            <div className="slide">
              <div className="slide-image">          
                <h2 className="text">Title</h2>     
                <img 
                  src='/assets/8PM_banner.jpg'
                  alt="" 
                  loading="lazy"
                  decoding="async"
                  fetchPriority="high"                  
                />
              </div>
            </div>
            <div className="slide">
              <div className="slide-image">          
                <h2 className="text">Title</h2>           
                <img 
                  src='/assets/8PM_banner.jpg'
                  alt="" 
                  loading="lazy"
                  decoding="async"
                  fetchPriority="high"                  
                />
              </div>
            </div>

          </Slider>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default News;
