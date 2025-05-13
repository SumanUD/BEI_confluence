import React, { useEffect } from "react";
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

const brandLogos = [
  "/assets/brand_logo/8PM.png",
  "/assets/brand_logo/Apollo_Copy.png",
  "/assets/brand_logo/BBK.png",
  "/assets/brand_logo/Crax.png",
  "/assets/brand_logo/Cremica.png",
  "/assets/brand_logo/ECE.png",
  "/assets/brand_logo/EnglishOven.png",
  "/assets/brand_logo/Gyan.png",
  "/assets/brand_logo/IIL.png",

];

const imageList = [
  { id: 1, src: "/assets/TotalEnergies/ELF_Moto_4_Tech_10W-30__A3_Poster-01.jpg", alt: "Atta Burger Bun 200g (Front)" },
  { id: 1, src: "/assets/TotalEnergies/HI-PERF_Poster_4T_700_20W-40_Final_A3-01.jpg", alt: "Atta Burger Bun 200g (Front)" },
  { id: 1, src: "/assets/TotalEnergies/HI-PERF_Poster_Final_A3_Hindi_Final-01.jpg", alt: "Atta Burger Bun 200g (Front)" },
  { id: 1, src: "/assets/TotalEnergies/TotalEnergies_A2_Poster_Eng-01.jpg", alt: "Atta Burger Bun 200g (Front)" },

  

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



const bannerImages = [
  "/assets/brand_banners/TotalEnergies.jpg",


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
      {images.map((image, index) => (
        <div key={index} className="slide">
          <div className="slide-image" style={{ backgroundImage: `url(${image})` }}></div>
        </div>
      ))}
    </Slider>
  );
};





const TotalEnergies = () => {
  // useEffect(() => {
  //   $(".video-gallery").magnificPopup({
  //     delegate: "a",
  //     type: "iframe",
  //     gallery: {
  //       enabled: true
  //     }
  //   });
  // }, []);

  return (
    <div className="englishOven">
      <Navbar />
      <BrandSlider images={bannerImages} />

      {/* <div className="brand"></div> */}
      <div className="below_banner">








        <div className="below_banner_content">
          <p>TotalEnergies is a global integrated energy company, producing and marketing a wide range of energy sources, including oil, biofuels, natural gas, green gases, renewables, and electricity. Operating in over 120 countries with a workforce of more than 100,000 employees, the company is committed to providing energy that is reliable, affordable, and sustainable. Sustainability is at the heart of TotalEnergies’ strategy, shaping its projects and operations as it works to meet the evolving energy needs of the world.
Founded in 1924 as Compagnie française des pétroles, TotalEnergies has evolved into a major international energy player, driving the transition towards cleaner energy. With a history marked by social, technological, and geopolitical milestones, the company continues to address global energy challenges while striving to create a more sustainable energy future.</p>
        </div>
      </div>

      {/* <div className="button_container">
        <button className="brand_button" type="submit">Learn More</button>
      </div> */}

      <ImageGallery images={imageList} />
      {/* <VideoGallery videos={videoListGallery} /> */}


      <div className="brand-logo-slider">
        <h2>BRAND BANNERS</h2>
        <LogoSlider 
          images={brandLogos} 
          width={200} 
          height={270}
          imageQuantity={brandLogos.length}
        />
      </div>


      <Footer />
    </div>
  );
};

export default TotalEnergies;
