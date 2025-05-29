
import Slider from "react-slick";
import "../styles/logoSlider.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const LogoSlider = ({ reverse = false, speed = 3000 }) => {

  const api = import.meta.env.VITE_API_URL;
  const [brandImage, setBrandImage] = useState([]);
  
  useEffect(() => {
    
    async function getBrands(){
      try{
        const res = await axios.get(api + '/allbrands');
        let newArr = res.data.data?.sort((a,b) => a.id - b.id)
        setBrandImage(newArr.map(obj => obj.brand_logo))        
      }catch(err){
        console.log(err)
      }
    }
    
    getBrands()
  }, [])
  

  const settings = {
    infinite: true,
    speed: 5000, // speed of scroll animation (not autoplay delay)
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // very important for seamless continuous scroll
    cssEase: "linear", // ensures smooth linear movement
    arrows: false,
    pauseOnHover: false,
    rtl: reverse,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="logo-slider-wrapper">
      <div className="logoContent">
        <h2>BEI BRANDS</h2>
      </div>
      <Slider {...settings}>
        {brandImage?.map((img, index) => (
          <div className="logo-slide-item" key={index}>
            <img src={img} alt={`Logo ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoSlider;
