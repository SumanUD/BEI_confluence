import React, { useEffect, useState } from "react";
import "magnific-popup";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/english_oven.scss";

import ImageGallery from "../components/Gallery";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import VideoGallery from "../components/VideoGallery";
import {useParams } from "react-router-dom";
import axios from "axios";
import { RenderEmbeddedText } from "../components/RenderEmbeddedText";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay'; // only if needed
import '../styles/logoSlider.scss';

const BrandSlider = ({ images, handleLoadingScreen }) => {  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };


  return (
    <Slider {...sliderSettings} className="brand-slider">
      {images?.map((image, index) => (
        <div key={index} className="slide">
          <div className="slide-image" >
            {/* <ImagePreloader imageUrl={image}/> */}
            <img 
              src={image}
              alt="" 
              loading="lazy"
              decoding="async"
              fetchPriority="high"
              onLoad={()=>handleLoadingScreen(false)}
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};

const videosettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: "progressive",
};


const EnglishOven = () => {
  const {brand} = useParams()

  const [loading, setLoading] = useState(true);
  const api = import.meta.env.VITE_API_URL;
  const [theBrand, setTheBrand] = useState({})
  const [abrand, setBrand] = useState([])

  useEffect(()=>{        
    async function getBrand(){    
      try{
        const res = await axios.get(api + '/allbrands')
        setTheBrand(res.data.data.find(obj => obj.brand_name == brand.split('_').join(' ')))        
        const remove1 = res.data.data.filter(item => item.brand_name !== "Nando's")
        // const remove2 = remove1.filter(item => item.brand_name !== "Nando's")
        // const remove3 = remove2.filter(item => item.brand_name !== "Gyan Dairy")
        setBrand(remove1)
      }catch(err){
        console.log(err)
      }
    }

    getBrand()
  }, [brand])
  
  const handleLoadingScreen = (action) => {    
    setTimeout(() => {
      setLoading(action)
    }, 1500);
  }


  return (
    <>
      {
        loading && 
        <div className="loadingScreen">
          <img src="/assets/gif/BEI_logo.gif" alt="" />
        </div>
      }

      <div className="englishOven">
        <Navbar />
        <BrandSlider images={theBrand?.banner_images} loadingState={!loading} handleLoadingScreen={handleLoadingScreen} />        
        {/* <div className="brand"></div> */}
        <div className="below_banner">             
          {
            theBrand?.youtube_link?.length >= 1 &&
            <div id="videoCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                
                {theBrand?.youtube_link?.map((video, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <div className="d-flex justify-content-center">
                      <iframe
                        width="780"
                        height="500"
                        src={video && video+'?rel=0&modestbranding=1'}
                        title={`YouTube video ${index + 1}`}  
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#videoCarousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#videoCarousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          }
          
          <div className="below_banner_content">
            <RenderEmbeddedText embeddedText={theBrand?.below_video_text}/>
          </div>
        </div>        

        <ImageGallery images={theBrand?.image_gallery} />
      
          <div className="below_banner">
            {
              theBrand?.video_gallery?.length >= 1 &&
              <div id="videoCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  
                  {theBrand?.youtube_link?.map((video, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <div className="d-flex justify-content-center">
                        <iframe
                          width="780"
                          height="500"
                          src={video && video+'?rel=0&modestbranding=1'}
                          title={`YouTube video ${index + 1}`}  
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carosel2"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carosel2"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            }
          </div>

        {
          (theBrand?.video_gallery_video?.length > 0) ? <VideoGallery videos={theBrand?.video_gallery_video} thumbnail={theBrand?.brand_logo} brandName={theBrand?.brand_name}/> : ''
        }
                
        <div className="logo-swiper-slider">
          <div className="logoContent">
            <h2>BEI BRANDS</h2>
          </div>          
          {
            abrand.length == 0 ? "":
            <Swiper
              modules={[Autoplay]}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={3000}            
              spaceBetween={50}            
              breakpoints={{
                1024: { slidesPerView: 5 },                
                0: { slidesPerView: 3 },
              }}            
            >
              {abrand.map((img, index) => (
                <SwiperSlide key={index}>
                  <a href={`/work/brand/${img.brand_name?.split(" ").join("_")}`}>
                    <img
                      src={img.brand_logo}
                      className="swiper-lazy"
                      alt={img.brand_name}
                      width="150"
                      loading="lazy"
                    />                  
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          }
        </div>
        <Footer/>     
      </div>
    </>
  );
};

export default EnglishOven;
