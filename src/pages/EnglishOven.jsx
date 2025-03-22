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
  // { id: 1, src: "/assets/englishOven/Atta Burger Bun 200g (Front).png", alt: "Atta Burger Bun 200g (Front)" },
  // { id: 2, src: "/assets/englishOven/Chocochip Muffin.jpg", alt: "Chocochip Muffin" },
  // { id: 3, src: "/assets/englishOven/Chocolate Lava Cake.jpg", alt: "Chocolate Lava Cake" },
  // { id: 4, src: "/assets/englishOven/Fruit Bun_1.jpg", alt: "Fruit Bun_1" },
  // { id: 5, src: "/assets/englishOven/Hazelnut Skillet Cookie.jpg", alt: "Hazelnut Skillet Cookie" },
  // { id: 6, src: "/assets/englishOven/Jumbo burger bun fop.jpeg", alt: "Jumbo burger bun fop" },
  // { id: 7, src: "/assets/englishOven/Kulcha Bread.jpg", alt: "Kulcha Bread" },
  // { id: 8, src: "/assets/englishOven/Pav 12 Pcs (Front).jpg", alt: "Pav 12 Pcs (Front)" },
  // { id: 9, src: "/assets/englishOven/Vanilla Chocochip Muffin.jpg", alt: "Vanilla Chocochip Muffin" },
  // { id: 10, src: "/assets/englishOven/White Bread (350) Front & Back.jpg", alt: "White Bread (350) Front & Back" },
  // { id: 11, src: "/assets/englishOven/Whole Wheat (Front).jpg", alt: "Whole Wheat (Front)" },
  // { id: 12, src: "/assets/englishOven/Zero Maida (Multigrain Bread)-07.jpg", alt: "Zero Maida (Multigrain Bread)-07" },
  // { id: 13, src: "/assets/englishOven/Zero Maida Pav_1.jpg", alt: "Zero Maida Pav_1" },
  // { id: 14, src: "/assets/englishOven/Zero_ Maida_1.jpg", alt: "Zero_ Maida_1.jpgZero_ Maida_1" },


  { id: 5, src: "/assets/englishOven/Digestive.jpg", alt: "Atta Burger Bun 200g (Front)" },
  { id: 6, src: "/assets/englishOven/Cremica ad (Kareena)_TOI-02.jpg", alt: "Atta Burger Bun 200g (Front)" },
  { id: 3, src: "/assets/englishOven/Gourmet_Leaftet.jpg", alt: "Atta Burger Bun 200g (Front)" },
  { id: 7, src: "/assets/englishOven/EO Full Page AD with Kareena Kapoor.jpg", alt: "Atta Burger Bun 200g (Front)" },

  // { id: 4, src: "/assets/englishOven/English Oven Vehicle Branding_65x34.5-1_1.jpg", alt: "Atta Burger Bun 200g (Front)" },

  // { id: 1, src: "/assets/englishOven/Bus Shelter (Zero Maida).jpg", alt: "Atta Burger Bun 200g (Front)" },
  // { id: 2, src: "/assets/englishOven/Surat Kiosk Final Branding Web 1x1_1.jpg", alt: "Atta Burger Bun 200g (Front)" },


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

const videoList = [
  {
    id: 1,
    url: "https://www.youtube.com/embed/Ua9vCpncYLA?si=UR_1qDmC-3nrlevX",
  },
  {
    id: 2,
    url: "https://www.youtube.com/embed/Ntk-XiNh7_I?si=GdI3nFvM9xCDtFhD",
  },

];

const bannerImages = [
  "/assets/englishOven/banner1.png",
  "/assets/englishOven/banner2.png",

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


const videosettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: "progressive",
};



const EnglishOven = () => {
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

        {/* <VideoCarousel/> */}


<div id="videoCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {videoList.map((video, index) => (
          <div
            key={video.id}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <div className="d-flex justify-content-center">
              <iframe
                width="780"
                height="500"
                src={video.url}
                title={`YouTube video ${video.id}`}
                frameBorder="0"
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
          <p>
          English Oven, a premium offering from Mrs. Bector's Food Specialities Limited, embodies the legacy of quality, taste, and tradition. With origins in Mrs. Rajni Bector's passion for baking, the brand represents decades of excellence rooted in homemade recipes and entrepreneurial spirit. From its humble beginnings with hand-churned ice cream and small-batch baking, English Oven has grown into a name synonymous with artisanal breads and baked goods, delivering homely quality and consistent taste to families worldwide.
Today, Mrs. Bector’s Food Specialities Limited, backed by the inspiration of its founder and her Padma Shri recognition, serves customers across India and beyond, with exports reaching over 64 countries. English Oven is a testament to innovation, quality, and care, reflecting the brand’s mission to provide wholesome baked products crafted with love.

          </p>
        </div>
      </div>

      <div className="button_container">
        <button className="brand_button" type="submit">Learn More</button>
      </div>

      <ImageGallery images={imageList} />
      <VideoGallery videos={videoListGallery} />


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

export default EnglishOven;
