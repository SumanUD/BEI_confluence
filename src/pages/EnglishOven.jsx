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
import LogoSlider from "../components/logoSlider";

import VideoGallery from "../components/VideoGallery";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { RenderEmbeddedText } from "../components/RenderEmbeddedText";

const imageList = [
  { id: 5, src: "/assets/englishOven/Digestive.jpg", alt: "Atta Burger Bun 200g (Front)" },
  { id: 6, src: "/assets/englishOven/Cremica ad (Kareena)_TOI-02.jpg", alt: "Atta Burger Bun 200g (Front)" },
  { id: 3, src: "/assets/englishOven/Gourmet_Leaftet.jpg", alt: "Atta Burger Bun 200g (Front)" },
  { id: 7, src: "/assets/englishOven/EO Full Page AD with Kareena Kapoor.jpg", alt: "Atta Burger Bun 200g (Front)" },
];

const videoListGallery = [
  {
    title: "Apna Apna Cremica",
    description: "Apna Apna Cremica description",
    image: "/assets/englishOven/White Bread (350) Front & Back.jpg",
    videoUrl: "https://www.youtube.com/embed/qh8K6eAqN64?si=Dvcjad_MyM8VXJUe",
  },
  {
    title: "English Over Bread",
    description: "English Over Bread description",
    image: "/assets/englishOven/Zero Maida Pav_1.jpg",
    videoUrl: "https://www.youtube.com/embed/qh8K6eAqN64?si=Dvcjad_MyM8VXJUe",
  },
  {
    title: "English Over Burger",
    description: "English over burger description",
    image: "/assets/englishOven/Fruit Bun_1.jpg",
    videoUrl: "https://www.youtube.com/embed/qh8K6eAqN64?si=Dvcjad_MyM8VXJUe",
  },
];

const BrandSlider = ({ images }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // arrows: false,
    arrows: true,
  };

  return (
    <Slider {...sliderSettings} className="brand-slider">
      {images?.map((image, index) => (
        <div key={index} className="slide">
          <div className="slide-image" style={{ backgroundImage: `url(${image})` }}></div>
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

  const api = import.meta.env.VITE_API_URL;
  const [theBrand, setTheBrand] = useState({})
  useEffect(()=>{

    async function getBrand(){
      try{
        const res = await axios.get(api + '/allbrands')
        setTheBrand(res.data.data.find(obj => obj.brand_name == brand.split('_').join(' ')))        
      }catch(err){
        console.log(err)
      }finally{
        handleLoadingScreen(false)
      }
    }

    getBrand()
  }, [brand])

  const [loading, setLoading] = useState(true);
  const handleLoadingScreen = (action) => {
    setTimeout(() => {
      setLoading(action)
    }, 2500);
  }

  return (
    <>
      {
        loading && 
        <div className="loadingScreen">
          <img src="/public/assets/gif/BEI_logo.gif" alt="" />
        </div>
      }

      <div className="englishOven">
        <Navbar />
        <BrandSlider images={theBrand?.banner_images} />

        {/* <div className="brand"></div> */}
        {
          theBrand?.youtube_link?.length >= 1 &&
          <div className="below_banner">             
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
                        src={video}
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
            
            <div className="below_banner_content">
              <RenderEmbeddedText embeddedText={theBrand?.below_video_text}/>
            </div>
          </div>
        }

        <ImageGallery images={theBrand?.image_gallery} />
      
        {
          (theBrand?.video_gallery_videos?.length > 0) ? <VideoGallery videos={theBrand?.video_gallery_videos} thumbnail={theBrand?.brand_logo} brandName={theBrand?.brand_name}/> : ''
        }
        <div className="brand-logo-slider">
          <LogoSlider 
            width={200} 
            height={270}
          />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default EnglishOven;
