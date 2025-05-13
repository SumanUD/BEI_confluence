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
  { id: 1, src: "/assets/bbk/370327600_691039909730603_638384084676335511_n.jpg", alt: "Atta Burger Bun 200g (Front)" },
  { id: 1, src: "/assets/bbk/375934839_700610658773528_6131007048613695906_n.jpg", alt: "Atta Burger Bun 200g (Front)" },
//   { id: 1, src: "/assets/bbk/377475873_322725350275956_6405499177819917671_n.jpg", alt: "Atta Burger Bun 200g (Front)" },
  { id: 1, src: "/assets/bbk/412318246_763729972461596_3509545860317256204_n.jpg", alt: "Atta Burger Bun 200g (Front)" },
  { id: 1, src: "/assets/bbk/414136372_767821038719156_6784901798239869495_n.jpg", alt: "Atta Burger Bun 200g (Front)" },
  { id: 1, src: "/assets/bbk/414678220_767977432036850_2390105553309536982_n.jpg", alt: "Atta Burger Bun 200g (Front)" },
  { id: 1, src: "/assets/bbk/434652909_830335972467662_2769734711275399658_n.jpg", alt: "Atta Burger Bun 200g (Front)" },
//   { id: 1, src: "/assets/bbk/An_8y-s9zNZTEUKLZgAu72yNb5npkP_bRkxXdDPiek08ekl0AZRvdze_yviOsOCf7K7ZLbbQl_slOjl5zVr-taw.jpg", alt: "Atta Burger Bun 200g (Front)" },
//   { id: 1, src: "/assets/bbk/An9CKFCkr9aCE-q1iYpr87VO2GLpd9zrfqmf8I972BFUHGJSK-5HvFKKyZa_cnGHPJQYzdOkBrzRI-s4iftEpd4g.jpg", alt: "Atta Burger Bun 200g (Front)" },


 
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
    url: "https://www.youtube.com/embed/GljS7BlcjEk?si=ONw6GKhWJRrWDkTI",
  },
  {
    id: 2,
    url: "https://www.youtube.com/embed/5FZqGv8YJQQ?si=-Bl_FaHgP0ciZVAE",
  },

];

const bannerImages = [
  "/assets/brand_banners/BBKBanner.jpg",
  "/assets/brand_banners/GBCbanner.jpg",

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



const Bbk = () => {
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
          Since 2015, Biryani By Kilo (BBK) has been India’s go-to for biryani and kebabs, serving up fresh dum-cooked handi biryanis with a signature shaahi andaaz that’s hard to resist. As pioneers of the handi biryani concept, BBK changed the game by delivering freshly prepared, melt-in-your-mouth biryanis for every individual order, right to your doorstep.
With over 70 royal dine-in outlets across 29+ cities, BBK has woven its culinary magic into the hearts of India—Delhi NCR, Mumbai, Pune, Kolkata, Bangalore, and even Goa! Their biryanis aren’t just food; they’re a royal experience, delivered within 70-90 minutes, cooked with care, patience, and an extra sprinkle of elegance.
When it comes to comfort food, few dishes have the power to evoke as much love and loyalty as Butter Chicken. But Goila Butter Chicken is not just any butter chicken—it’s the magic of Saransh Goila, the “Butter Chicken King”, in a bowl!
Goila Butter Chicken brings together the finest ingredients, lovingly cooked to create a velvety, mouthwatering experience. Whether you're dining in or enjoying a delivery, each bite tells a story of dedication, expertise, and a dash of Saransh’s culinary flair. Saransh’s journey isn’t just about food—it’s about a mission to bring India’s true flavors to the world. 


          </p>
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

export default Bbk;
