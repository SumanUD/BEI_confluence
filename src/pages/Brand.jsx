import React, { useEffect } from "react";
import $ from "jquery";
// import "magnific-popup/dist/jquery.magnific-popup.min.css";
import "magnific-popup";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/brand.scss";
// import VideoGallery from "../components/VideoGallery";
import ImageGallery from "../components/Gallery";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const imageList = [
  { id: 1, src: "/assets/8PM/1999 Poster (Final)-01.jpg", alt: "Atta Burger Bun 200g (Front)" },
  { id: 2, src: "/assets/8PM/Award Poster - Final-01.jpg", alt: "Chocochip Muffin" },
  { id: 4, src: "/assets/8PM/IPL Sunboard 18x12 inch-1_3.jpg", alt: "Fruit Bun_1" },
  { id: 3, src: "/assets/8PM/Indian Navy ad_Final.jpg", alt: "Chocolate Lava Cake" },
  { id: 5, src: "/assets/8PM/Jaisalmer Menu_2x3.jpg", alt: "Hazelnut Skillet Cookie" },
  { id: 6, src: "/assets/8PM/Jaisalmer_A4 (Indian Craft Gin) with  Index No. 79105.jpg", alt: "Jumbo burger bun fop" },
  { id: 7, src: "/assets/8PM/Outdoor Route - 01 (horizontal)_2x1.jpg", alt: "Kulcha Bread" },
  { id: 8, src: "/assets/8PM/Outdoor Route - 01 (Vertical)_1x1.jpg", alt: "Pav 12 Pcs (Front)" },
  { id: 9, src: "/assets/8PM/Outdoor Route - 03_2x1 in ratio.jpg", alt: "Vanilla Chocochip Muffin" },
  { id: 10, src: "/assets/8PM/Pocket Pack New Hipster Pack (UP).jpg", alt: "White Bread (350) Front & Back" },
  { id: 11, src: "/assets/8PM/Radico _ Airforce Day Ad _ 33x47 _ CM_1.jpg", alt: "Whole Wheat (Front)" },
  { id: 12, src: "/assets/8PM/Untitled-1.png", alt: "Zero Maida (Multigrain Bread)-07" },
  { id: 13, src: "/assets/8PM/Untitled-2.png", alt: "Zero Maida Pav_1" },

];

const bannerImages = [
  "/assets/brand_banners/jaisalmer.png",
  "/assets/brand_banners/8PM_banner2.png",

];

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


// const videoList = [
//   {
//     title: "Apna Apna Cremica",
//     description: "Apna Apna Cremica description",
//     image: "/assets/8PM/White Bread (350) Front & Back.jpg",
//     videoUrl: "https://vimeo.com/1066454306/c56cd58cb5",
//   },
//   {
//     title: "English Over Bread",
//     description: "English Over Bread description",
//     image: "/assets/8PM/Zero Maida Pav_1.jpg",
//     videoUrl: "https://vimeo.com/1066454421/b2f77ac7b9",
//   },
//   {
//     title: "English Over Burger",
//     description: "English over burger description",
//     image: "/assets/8PM/Fruit Bun_1.jpg",
//     videoUrl: "https://vimeo.com/1066454557/658bc9fa43",
//   },
// ];


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

const SliderComponent = ({ images }) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...sliderSettings} className="brand-logo-slider">
      {images.map((image, index) => (
        <div key={index} className="logo-slide">
         <Link to=""> <img src={image} alt={`Brand Logo ${index + 1}`} className="brand-logo" width={"200px"}/></Link>
        </div>
      ))}
    </Slider>
  );
};


const Brand = () => {
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
    <div className="brand1">
      <Navbar />
      <BrandSlider images={bannerImages} />
      <div className="below_banner">
        {/* <VideoGallery videos={videoList} /> */}

        <div className="brandVideo">
          <iframe width="780" height="500" src="https://www.youtube.com/embed/qh8K6eAqN64?si=Dvcjad_MyM8VXJUe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

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

      <ImageGallery images={imageList} />

      <div className="brand-logo-slider">
        <h2>BRAND BANNERS</h2>
        <SliderComponent images={brandLogos} />
      </div>

      <Footer />
    </div>
  );
};

export default Brand;
