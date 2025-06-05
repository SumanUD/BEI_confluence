import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/about.scss";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SlGlobe } from "react-icons/sl";
import { useRef } from "react";

import about_us from "/assets/about/about_us.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { RenderEmbeddedText } from "../components/RenderEmbeddedText";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay'; // only if needed
import '../styles/logoSlider.scss';

const AboutUs = () => {

  const api = import.meta.env.VITE_API_URL;
  const [videoSrc, setVideoSrc] = useState('');
  const [about, setAbout] = useState({});
  const [brand, setBrand] = useState([])
  useEffect(()=>{
    async function getData(){
      try{
        const res = await axios.get(api + '/aboutcms');
        const res2 = await axios.get(api + '/allbrands');        
        setAbout(res.data.data)
        const remove1 = res2.data.data.filter(item => item.brand_name !== "Nando's")
        // const remove2 = remove1.filter(item => item.brand_name !== "Nando's")
        // const remove3 = remove2.filter(item => item.brand_name !== "Gyan Dairy")
        setBrand(remove1)    
        // setBrand(res2.data.data)      
      }catch(err){
        console.log(err)
      }
    }
    getData();
  },[])

  useEffect(()=>{
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const setVideo = () => {      
      setVideoSrc(
        mediaQuery.matches
          ? about.mobile_video
          : about.desktop_video
      );         
    };

    setVideo()

    mediaQuery.addEventListener("change", setVideo);    
    return () => mediaQuery.removeEventListener("change", setVideo);

  }, [about])

  const [loading, setLoading] = useState(true);
  const handleLoadingScreen = (action) => {
    setTimeout(() => {
      setLoading(action)
    }, 500);
  }

  const bannerRef = useRef(null);
  const [mute, setMute] = useState(false);

  const [limitText, setLimitText] = useState('');
  const handleShowMoreBio = (person) =>{
    if(limitText != person){
      setLimitText(person)
    }else{
      setLimitText("")
    }
  }

  return (    
    <>
      {
        loading && 
        <div className="loadingScreen">
          <img src="/assets/gif/BEI_logo.gif" alt="" />
        </div>
      }
      <Navbar />
      <div className="about-container">
        <div className="aboutUs_banner">
          <div className="video-container">
            {
              videoSrc && 
              <video
                muted={!mute}
                autoPlay                
                loop
                playsInline
                className="background-video"
                onLoadedData={() => handleLoadingScreen(false)}
                ref={bannerRef}
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            }
            <button onClick={()=>setMute(!mute)} className="mute_unmute">
              <img src="/assets/mute.png" alt="icons" className={mute ? 'hide':''}/>
              <img src="/assets/unmute.png" alt="icon" className={mute ? '':'hide'}/>
            </button>
          </div>
        </div>


        <div className="about-grid-section">
          <div className="text-content">
            <h2>About Us</h2>
            <div  className="text-yellow">
              <RenderEmbeddedText embeddedText={about.description}/>
            </div>
          </div>
          <div className="image-content">
            <img src={about_us} alt="Our Journey" />
          </div>
        </div>

        {
          about.team_members?.map((item, index)=>(
            <div className={`tapas_gupta ${index%2 == 0 ? 'even':'odd'}`} key={index}>
              <div className="profile-section">
                <div className="profile-image">
                  <img src={item.photo} alt={item.name}/>
                </div>
                <div className="social-icons">
                  {item.website && <Link to={item.website} target="_blank"><SlGlobe /></Link>}
                  {item.email && <Link to={'mailto:'+item.email} target="_blank"><HiOutlineMail /></Link>}
                  {item.linkedin && <Link to={item.linkedin} target="_blank"><FaLinkedin /></Link>}
                </div>
              </div>
              <div className="bio-section">
                <div className="frame">
                  <div className="paper"></div>
                  <div className="paper"></div>
                  <div className="paper"></div>
                  <div className="paper">
                    <div className="bio-box">
                      <div className="border-design">
                        <p className={limitText != item.name ? "limit" : ''}>{item.description}</p>
                        <button onClick={()=>handleShowMoreBio(item.name)}>
                          {
                            limitText == item.name ? '...Show Less' : 'Show More'
                          }
                        </button>                                                                     
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
            
      </div>
      <div className="logo-swiper-slider">
        <div className="logoContent">
          <h2>BEI BRANDS</h2>
        </div>          
        {
          brand.length == 0 ? "loading..." :
          <Swiper
              modules={[Autoplay]}
              loop={brand.length >= 6}
              autoplay={{
                delay: 0,                
              }}
              speed={3000}            
              spaceBetween={50}            
              breakpoints={{
                1024: { slidesPerView: 5 },                       
                0: { slidesPerView: 3 },
              }}            
            >
            {brand.map((img, index) => (
              <SwiperSlide key={index}>
                <a href={`/work/brand/${img.brand_name?.split(" ").join("_")}`}>
                  <img
                    src={img.brand_logo}
                    className="swiper-lazy"
                    alt={index}                    
                    loading="lazy"                    
                  />                  
                </a>
              </SwiperSlide>
            ))}
          </Swiper>          
        }
      </div>  
      <Footer />
    </>
  );
};

export default AboutUs;
