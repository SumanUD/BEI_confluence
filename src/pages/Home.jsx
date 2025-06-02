import MainLayout from "../layouts/MainLayout";
import "../styles/home.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {

  const api = import.meta.env.VITE_API_URL;
  const [videoSrc, setVideoSrc] = useState('');
  const [home, setHome] = useState({});
  useEffect(()=>{
    async function getData(){
      try{
        const res = await axios.get(api + '/homecms')        
        setHome(res.data.data)
      }catch(err){
        console.log(err)
      }
    }
    getData();
  }, [])

  const [mute, setMute] = useState(false);

  useEffect(()=>{
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const setVideo = () => {
      setVideoSrc(
        mediaQuery.matches
          ? home.mobile_full_video
          : home.desktop_full_video
      );
    };

    setVideo()

    mediaQuery.addEventListener("change", setVideo);    
    return () => mediaQuery.removeEventListener("change", setVideo);

  }, [home])

  const [loading, setLoading] = useState(true);
  const handleLoadingScreen = (action) => {
    setTimeout(() => {
      setLoading(action)
    }, 1000);
  }

  return (    
    <MainLayout>

      {
        loading && 
        <div className="loadingScreen">
          <img src="/assets/gif/BEI_logo.gif" alt="" />
        </div>
      }

      {
        videoSrc && 
        <div className="home">
          <div className="video-container">
            <video
              autoPlay              
              loop              
              playsInline
              className="background-video"
              onLoadedData={()=>handleLoadingScreen(false)}
              muted={!mute}
            >
            <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      }
      <button onClick={()=>setMute(!mute)} className="mute_unmute">
        <img src="/public/assets/mute.png" alt="icons" className={mute ? 'hide':''}/>
        <img src="/public/assets/unmute.png" alt="icon" className={mute ? '':'hide'}/>
      </button>
    </MainLayout>
  );
};

export default Home;
