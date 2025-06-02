import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/news.scss";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from "axios";

const News = () => {

  const api = import.meta.env.VITE_API_URL;
  const [news, setNews] =useState([])

  useEffect(()=>{
    async function getNew(){
      try{
        const res = await axios.get(api + '/news')        
        setNews(res.data.data)               
      }catch(err){
        console.log(err)
      }
    }
    getNew()
  },[])

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
      responsive: [
    {
      breakpoint: 1024, // below 1024px
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 968, // below 768px
      settings: {
        slidesToShow: 1,
      },
    },
  ],
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
        <img src="/assets/news/news.png" alt="img" className="img1" />
        <img src="/assets/news/tag.jpg" alt="img" className="img2" />
        <div className="news-slider">
          <Slider {...sliderSettings} className="brand-slider">
            {
              news?.map((item, index)=>(
                <div className="slide" key={index}>                 
                  <a href={item.news_link} target="_blank">
                    <div className="slide-image">          
                      <h2 className="text">{item.news_title}</h2>           
                      <img 
                        src={item.thumbnail_picture}
                        alt="" 
                        loading="lazy"
                        decoding="async"
                        fetchPriority="high"                  
                      />
                    </div>
                  </a>
                </div>
              ))
            }
          

          </Slider>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default News;
