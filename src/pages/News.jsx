import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/news.scss";
import { useEffect, useState, useRef } from "react";

import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay , Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay'; // only if needed
import 'swiper/css/navigation';
import '../styles/logoSlider.scss';

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
          <Swiper
              modules={[Navigation, Autoplay]}
              navigation={true}
              loop={true}           
              spaceBetween={50}                          
              breakpoints={{
                700: { slidesPerView: 2 },                       
                0: { slidesPerView: 1 },
              }}  
          >

            {news.map((item, index) => (
              <SwiperSlide key={index}>
                <Link to={item.news_link} target="_blank">
                  <div className="news_title">{item.news_title}</div>
                  <img
                    src={item.thumbnail_picture}
                    className="swiper-lazy"
                    alt={index}                    
                    loading="lazy"                    
                  />                  
                </Link>
              </SwiperSlide>
            ))}

          </Swiper>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default News;
