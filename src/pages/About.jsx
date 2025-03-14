import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/about.scss";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import tapasGupta from "/assets/about/tapas_image.png";
import abhishekGupta from "/assets/about/abhishek_image.png";
import shahidHussain from "/assets/about/shahid_image.png";
import about_us from "/assets/about/about_us.png";


const AboutUs = () => {
  const tapasGuptaParagraphs = [
    "With over 18 years of shaping brands and crafting compelling creative strategies, Shahid has excelled on both sides of the spectrum—agency and brand. Now at BEI, he’s driving the agency’s vision to new heights with his unique blend of creativity and strategic insight.",
    "As the head of Creative at UBER EATS, Shahid played a pivotal role in launching the brand in India, assembling and leading a high-performing team of 15 to deliver campaigns that left a lasting impact.",
    "His global journey includes transformative stints with BOTIM in Dubai and Polygon, a trailblazing Web3 company also based in Dubai, where he blended innovation with creativity in the tech-forward space.",
  ];
  const abhishekGuptaParagraphs = [
    "With over 18 years of shaping brands and crafting compelling creative strategies, Shahid has excelled on both sides of the spectrum—agency and brand. Now at BEI, he’s driving the agency’s vision to new heights with his unique blend of creativity and strategic insight.",
    "As the head of Creative at UBER EATS, Shahid played a pivotal role in launching the brand in India, assembling and leading a high-performing team of 15 to deliver campaigns that left a lasting impact.",
    "His global journey includes transformative stints with BOTIM in Dubai and Polygon, a trailblazing Web3 company also based in Dubai, where he blended innovation with creativity in the tech-forward space.",
  ];
  const shahidHussainParagraphs = [
    "With over 18 years of shaping brands and crafting compelling creative strategies, Shahid has excelled on both sides of the spectrum—agency and brand. Now at BEI, he’s driving the agency’s vision to new heights with his unique blend of creativity and strategic insight.",
    "As the head of Creative at UBER EATS, Shahid played a pivotal role in launching the brand in India, assembling and leading a high-performing team of 15 to deliver campaigns that left a lasting impact.",
    "His global journey includes transformative stints with BOTIM in Dubai and Polygon, a trailblazing Web3 company also based in Dubai, where he blended innovation with creativity in the tech-forward space.",
  ];

  const [visibleCount, setVisibleCount] = useState(1);

  return (
    <>
      <Navbar />
      <div className="about-container">
      <div className="aboutUs_banner">
      <div className="video-container">
        <iframe
          width="800"
          height="405"
          src="https://www.youtube.com/embed/YVkUvmDQ3HY?si=I5cM5YmwPhTH76k0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>

      <div className="about-grid-section">
        <div className="text-content">
          <h2>About Us</h2>
          <p>
          BEI is a full-service integrated independent advertising agency with over 26 years of
          experience in building brands. <br/>
          Founded in 1998 by the visionary Tapas Gupta, honored as The Marketing and Advertising 
          Person of the Year (2024), BEI’s purpose is to push the growth trajectory of its clients on all 
          possible fronts. Be it Brand Strategy, Creative Execution, Digital Marketing, and Mainline/On
          line Media planning & buying, BEI is an experienced team to work with.<br/>
          Over the years, BEI Confluence has evolved into a dynamic force in the advertising industry, 
          fuelled by enduring partnerships with leading brands across categories. Today, BEI Conflu
          ence stands tall as a mid-sized 360 communication powerhouse, boasting a team of over 
          100 talented professionals across two offices.<br/>
          From crafting cutting-edge brand strategies, executing captivating creative campaigns, and 
          making the most of digital marketing expertise, BEI Confluence is your one-stop destination 
          for all things advertising. <br/>
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
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
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
                  {tapasGuptaParagraphs.slice(0, visibleCount).map((para, index) => (
                    <p key={index}>{para}</p>
                  ))}
                  {visibleCount < tapasGuptaParagraphs.length && (
                    <button onClick={() => setVisibleCount(visibleCount + 1)} className="read-more">Read More</button>
                  )}
                  {visibleCount > 1 && (
                    <button onClick={() => setVisibleCount(1)} className="read-less">Read Less</button>
                  )}
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
                  {abhishekGuptaParagraphs.slice(0, visibleCount).map((para, index) => (
                    <p key={index}>{para}</p>
                  ))}
                  {visibleCount < abhishekGuptaParagraphs.length && (
                    <button onClick={() => setVisibleCount(visibleCount + 1)} className="read-more">Read More</button>
                  )}
                  {visibleCount > 1 && (
                    <button onClick={() => setVisibleCount(1)} className="read-less">Read Less</button>
                  )}
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
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>

        </div>
        <div className="tapas_gupta">
        <div className="profile-section">
          <div className="profile-image">
            <img src={shahidHussain} alt="Tapas Gupta" />
          </div>
          <div className="social-icons">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
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
                  {shahidHussainParagraphs.slice(0, visibleCount).map((para, index) => (
                    <p key={index}>{para}</p>
                  ))}
                  {visibleCount < shahidHussainParagraphs.length && (
                    <button onClick={() => setVisibleCount(visibleCount + 1)} className="read-more">Read More</button>
                  )}
                  {visibleCount > 1 && (
                    <button onClick={() => setVisibleCount(1)} className="read-less">Read Less</button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
