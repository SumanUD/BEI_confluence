import React, { useEffect } from "react";
import $ from "jquery";
// import "magnific-popup/dist/jquery.magnific-popup.min.css";
import "magnific-popup";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/english_oven.scss";
import VideoGallery from "../components/VideoGallery";
import ImageGallery from "../components/Gallery";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imageList = [
    { id: 1, src: "/assets/englishOven/Atta Burger Bun 200g (Front).png", alt: "Atta Burger Bun 200g (Front)" },
    { id: 2, src: "/assets/englishOven/Chocochip Muffin.jpg", alt: "Chocochip Muffin" },
    { id: 3, src: "/assets/englishOven/Chocolate Lava Cake.jpg", alt: "Chocolate Lava Cake" },
    { id: 4, src: "/assets/englishOven/Fruit Bun_1.jpg", alt: "Fruit Bun_1" },
    { id: 5, src: "/assets/englishOven/Hazelnut Skillet Cookie.jpg", alt: "Hazelnut Skillet Cookie" },
    { id: 6, src: "/assets/englishOven/Jumbo burger bun fop.jpeg", alt: "Jumbo burger bun fop" },
    { id: 7, src: "/assets/englishOven/Kulcha Bread.jpg", alt: "Kulcha Bread" },
    { id: 8, src: "/assets/englishOven/Pav 12 Pcs (Front).jpg", alt: "Pav 12 Pcs (Front)" },
    { id: 9, src: "/assets/englishOven/Vanilla Chocochip Muffin.jpg", alt: "Vanilla Chocochip Muffin" },
    { id: 10, src: "/assets/englishOven/White Bread (350) Front & Back.jpg", alt: "White Bread (350) Front & Back" },
    { id: 11, src: "/assets/englishOven/Whole Wheat (Front).jpg", alt: "Whole Wheat (Front)" },
    { id: 12, src: "/assets/englishOven/Zero Maida (Multigrain Bread)-07.jpg", alt: "Zero Maida (Multigrain Bread)-07" },
    { id: 13, src: "/assets/englishOven/Zero Maida Pav_1.jpg", alt: "Zero Maida Pav_1" },
    { id: 14, src: "/assets/englishOven/Zero_ Maida_1.jpg", alt: "Zero_ Maida_1.jpgZero_ Maida_1" },
  ];

const videoList = [
    {
      title: "Apna Apna Cremica",
      description: "Apna Apna Cremica description",
      image: "/assets/englishOven/White Bread (350) Front & Back.jpg",
      videoUrl: "https://vimeo.com/1066454306/c56cd58cb5",
    },
    {
      title: "English Over Bread",
      description: "English Over Bread description",
      image: "/assets/englishOven/Zero Maida Pav_1.jpg",
      videoUrl: "https://vimeo.com/1066454421/b2f77ac7b9",
    },
    {
        title: "English Over Burger",
        description: "English over burger description",
        image: "/assets/englishOven/Fruit Bun_1.jpg",
        videoUrl: "https://vimeo.com/1066454557/658bc9fa43",
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
  


const EnglishOven = () => {
  useEffect(() => {
    $(".video-gallery").magnificPopup({
      delegate: "a",
      type: "iframe",
      gallery: {
        enabled: true
      }
    });
  }, []);

  return (
    <div className="englishOven">
      <Navbar />
      <BrandSlider images={bannerImages} />

      {/* <div className="brand"></div> */}
      <div className="below_banner">
      <VideoGallery videos={videoList} />

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
      <Footer />
    </div>
  );
};

export default EnglishOven;
