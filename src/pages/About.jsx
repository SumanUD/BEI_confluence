import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutGallery from "../components/AboutGallery";
import "../styles/about.scss";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

import tapasGupta from "/assets/about/tapas_image.png";
import abhishekGupta from "/assets/about/abhishek_image.png";
import shahidHussain from "/assets/about/shahid_image.png";
import rumaGupta from "/assets/about/ruma_gupta.png";

import about_us from "/assets/about/about_us.png";
import { Link } from "react-router-dom";
import LogoSlider from "../components/logoSlider";
import axios from "axios";

const AboutUs = () => {

  const api = import.meta.env.VITE_API_URL;
  const [videoSrc, setVideoSrc] = useState('');
  const [about, setAbout] = useState({});

  useEffect(()=>{
    async function getData(){
      try{
        const res = await axios.get(api + '/aboutcms')        
        setAbout(res.data.data)
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

  const tapasGuptaParagraphs = [
    " A seasoned marketing and advertising maven, Tapas Gupta brings over 35 years of rich experience, spanning Indian and international markets, to the table.His illustrious career includes a long - standing association with McCann - Erickson Worldwide—one of the globe’s leading advertising agencynetworks.",
    "From 1987 to 1995, Tapas Gupta spearheaded McCann Erickson’s offices in Delhi, Kolkata, and Kathmandu as Senior Vice President and Director, simultaneously managing the Bangalore office from 1991 to 1993. His expertise extended beyond borders as he collaborated with McCann offices inHong Kong, Manila, and Bangkok, coordinating campaigns for global giants Coca - Cola and Nestlé across the APAC region.",
    "Tapas Gupta played a pivotal role in Coca - Cola’s iconic brand launch in India in 1994 - 95, a campaign he championed and nurtured for over two years.Recognized for his visionary leadership, McCann Erickson appointed him President & CEO of its new joint venture agency, PSL - Erickson, in 1996—a role he held until 1998. In 1999, Tapas Gupta took the entrepreneurial plunge, founding Confluence Communication, where his passion for impactful storytelling and innovative strategies continues to drive success",
  ];
  const abhishekGuptaParagraphs = [
    "With over 18 years of experience in the dynamic world of advertising, Abhishek has honed his craft at some of the top 5 agencies in India, driving impactful campaigns for iconic brands.",
    "At HAVAS WORLDWIDE (formerly EURO RSCG), he orchestrated communication strategies for Max New York Life Insurance, Makemytrip.com, and Indiatimes.com, leaving an indelible mark on the digital and financial sectors. Moving to Publicis Worldwide, Abhishek championed Nestlé India’s dairy portfolio, managing beloved brands like Nestlé a+ Milk, Everyday, and Milkmaid, as well as McVitie’s Biscuits under the globally renowned United Biscuits group.",
    "His tenure at O&M, Delhi, as AVP saw him steering flagship accounts for The Coca-Cola Company, including Sprite and Kinley, alongside the diverse Philips portfolio spanning lighting and consumer durables.",
    "Currently, as Joint Managing Director at BEI Confluence, Abhishek is the driving force behind Client Services. As the agency's brand custodian, he leads the servicing teams, ensuring unparalleled client engagement and delivering creative solutions that resonate in the marketplace.",
  ];
  const shahidHussainParagraphs = [
    "With over 18 years of shaping brands and crafting compelling creative strategies, Shahid has excelled on both sides of the spectrum—agency and brand. Now at BEI, he’s driving the agency’s vision to new heights with his unique blend of creativity and strategic insight.",
    "As the head of Creative at UBER EATS, Shahid played a pivotal role in launching the brand in India, assembling and leading a high-performing team of 15 to deliver campaigns that left a lasting impact.",
    "His global journey includes transformative stints with BOTIM in Dubai and Polygon, a trailblazing Web3 company also based in Dubai, where he blended innovation with creativity in the tech-forward space.",
  ];

  const rumpaGuptaParagraph = [
    "Rumpa started her career in the development sector in India and then moved to Singapore. She has worked extensively on advocacy and communications and has expertise in developing programmes for Non-Profit Organisations on issues related to child protection, youth work and community building.",
    "She has been working in advertising and Communications for the last 6 years and leading flagship brands like Insecticides (India) Ltd, Jindal Stainless, Total Energies, JK Paper, as their communications partner.",
    "Rumpa is a graduate in Psychology and holds Master's in Journalism, having deep understanding of human insights and purchase behaviour. Her ability and skill to understand what people want and need help in creating effective campaigns by identifying patterns in consumer behavior and attitudes."
  ];

  const [visibleCountTapas, setVisibleCountTapas] = useState(1);
  const [visibleCountAbhishek, setVisibleCountAbhishek] = useState(1);
  const [visibleCountShahid, setVisibleCountShahid] = useState(1);
  const [visibleCountRuma, setVisibleCountRuma] = useState(1);

  const [loading, setLoading] = useState(true);
  const handleLoadingScreen = (action) => {
    setTimeout(() => {
      setLoading(action)
    }, 1500);
  }

  return (    
    <>
      {
        loading && 
        <div className="loadingScreen">
          <img src="/public/assets/gif/BEI_logo.gif" alt="" />
        </div>
      }
      <Navbar />
      <div className="about-container">
        <div className="aboutUs_banner">
          <div className="video-container">
            {
              videoSrc && 
              <video
                autoPlay
                muted
                loop
                playsInline
                className="background-video"
                onLoadedData={() => handleLoadingScreen(false)}
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            }

          </div>
        </div>


        <div className="about-grid-section">
          <div className="text-content">
            <h2>About Us</h2>
            <p>
              BEI is a full-service integrated independent advertising agency with over 26 years of
              experience in building brands. <br /> <br />
              Founded in 1998 by the visionary Tapas Gupta, honored as The Marketing and Advertising
              Person of the Year (2024), BEI’s purpose is to push the growth trajectory of its clients on all
              possible fronts. Be it Brand Strategy, Creative Execution, Digital Marketing, and Mainline/On
              line Media planning & buying, BEI is an experienced team to work with.<br /> <br />
              Over the years, BEI Confluence has evolved into a dynamic force in the advertising industry,
              fuelled by enduring partnerships with leading brands across categories. Today, BEI Conflu
              ence stands tall as a mid-sized 360 communication powerhouse, boasting a team of over
              100 talented professionals across two offices.<br /> <br />
              From crafting cutting-edge brand strategies, executing captivating creative campaigns, and
              making the most of digital marketing expertise, BEI Confluence is your one-stop destination
              for all things advertising. <br />
            </p>
          </div>
          <div className="image-content">
            <img src={about_us} alt="Our Journey" />
          </div>
        </div>

        <div className="tapas_gupta">
          <div className="profile-section">
            <div className="profile-image">
              <img src={tapasGupta} alt="Tapas Gupta" />
            </div>
            <div className="social-icons">
              <Link to="mailto:tapas@confluencecommunication.com"><CiMail /></Link>
              <Link to="https://www.linkedin.com/in/tapas-gupta-b70bb298/"><FaLinkedin /></Link>
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
                    {tapasGuptaParagraphs.slice(0, visibleCountTapas).map((para, index) => {
                      const isLastVisible = index === visibleCountTapas - 1;
                      const hasMore = visibleCountTapas < tapasGuptaParagraphs.length;
                      const hasLess = visibleCountTapas > 1;
                      return (
                        <p key={index}>
                          {para}
                          {isLastVisible && hasMore && (
                            <span className="read-toggle" onClick={() => setVisibleCountTapas(visibleCountTapas + 1)}> ...Read more</span>
                          )}
                          {isLastVisible && !hasMore && hasLess && (
                            <span className="read-toggle" onClick={() => setVisibleCountTapas(1)}> close</span>
                          )}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

 <div className="abhishek_gupta">

          <div className="bio-section">
            <div className="frame">
              <div className="paper"></div>
              <div className="paper"></div>
              <div className="paper"></div>
              <div className="paper">
                <div className="bio-box">
                  <div className="border-design">
                    {abhishekGuptaParagraphs.slice(0, visibleCountAbhishek).map((para, index) => {
                      const isLastVisible = index === visibleCountAbhishek - 1;
                      const hasMore = visibleCountAbhishek < abhishekGuptaParagraphs.length;
                      const hasLess = visibleCountAbhishek > 1;
                      return (
                        <p key={index}>
                          {para}
                          {isLastVisible && hasMore && (
                            <span className="read-toggle" onClick={() => setVisibleCountAbhishek(visibleCountAbhishek + 1)}> ...Read more</span>
                          )}
                          {isLastVisible && !hasMore && hasLess && (
                            <span className="read-toggle" onClick={() => setVisibleCountAbhishek(1)}> close</span>
                          )}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

                    <div className="profile-section">
            <div className="profile-image">
              <img src={abhishekGupta} alt="Abhishek Gupta" />
            </div>
            <div className="social-icons">
              <Link to="mailto:abhishek@confluencecommunication.com"><CiMail /></Link>
              <Link to="https://www.linkedin.com/in/abhishek-gupta-b340995/"><FaLinkedin /></Link>
            </div>
          </div>
        </div>

  <div className="abhishek_gupta">
          <div className="profile-section">
            <div className="profile-image">
              <img src={rumaGupta} alt="Ruma Gupta" />
            </div>
            <div className="social-icons">
              <Link to="mailto:rumpa@confluencecommunication.com"><CiMail /></Link>
              <Link to="https://www.linkedin.com/in/rumpa-gupta-a64424312/"><FaLinkedin /></Link>
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
                    {rumpaGuptaParagraph.slice(0, visibleCountRuma).map((para, index) => {
                      const isLastVisible = index === visibleCountRuma - 1;
                      const hasMore = visibleCountRuma < rumpaGuptaParagraph.length;
                      const hasLess = visibleCountRuma > 1;
                      return (
                        <p key={index}>
                          {para}
                          {isLastVisible && hasMore && (
                            <span className="read-toggle" onClick={() => setVisibleCountRuma(visibleCountRuma + 1)}> ...Read more</span>
                          )}
                          {isLastVisible && !hasMore && hasLess && (
                            <span className="read-toggle" onClick={() => setVisibleCountRuma(1)}> close</span>
                          )}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

  <div className="tapas_gupta shahid_hussain">
          <div className="bio-section">
            <div className="frame">
              <div className="paper"></div>
              <div className="paper"></div>
              <div className="paper"></div>
              <div className="paper">
                <div className="bio-box">
                  <div className="border-design">
                    {shahidHussainParagraphs.slice(0, visibleCountShahid).map((para, index) => {
                      const isLastVisible = index === visibleCountShahid - 1;
                      const hasMore = visibleCountShahid < shahidHussainParagraphs.length;
                      const hasLess = visibleCountShahid > 1;
                      return (
                        <p key={index}>
                          {para}
                          {isLastVisible && hasMore && (
                            <span className="read-toggle" onClick={() => setVisibleCountShahid(visibleCountShahid + 1)}> ...Read more</span>
                          )}
                          {isLastVisible && !hasMore && hasLess && (
                            <span className="read-toggle" onClick={() => setVisibleCountShahid(1)}> close</span>
                          )}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="profile-section">
            <div className="profile-image">
              <img src={shahidHussain} alt="Shahid Hussain" />
            </div>
            <div className="social-icons">
              <Link to="mailto:shahid@confluencecommunication.com"><CiMail /></Link>
              <Link to="https://www.linkedin.com/in/shahidh/"><FaLinkedin /></Link>
            </div>
          </div>
        </div>

        <div className="about">
          {/* <AboutGallery /> */}
          <LogoSlider/>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
