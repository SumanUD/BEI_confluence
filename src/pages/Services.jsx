import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/services.scss";

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="services">
        <div className="first_banner">
          <div className="banner-grid">
            <div className="bulb-animation">
              <img src="/assets/services/circle.png" alt="circle image" className="circle_img" />
              <img src="/assets/services/bulb.png" alt="bulb image" className="bulb_image" />
              <img src="/assets/services/light_arrows.png" alt="light arrows" className="light_arrows" />
            </div>
            <div className="brand-statergy">
              {/* <img src="/assets/services/brandStatergy.png" alt="Brand Strategy Image" /> */}
              <h1 className="text-center" style={{ color: "#ffeb00" }}>BRAND STRATEGY</h1>

              <div className="inside_text">
                <p>We believe that a strong brand strategy is the cornerstone of long-term success. Our approach goes beyond the surface, delving deep into insights about the business, the market, and the audience. By aligning purpose with positioning, we create strategies that serve as a clear roadmap for brands to thrive and evolve. It’s about crafting a vision that not only <br /> resonates today but also anticipates tomorrow’s opportunities, ensuring every brand we work with remains impactful and relevant.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="second_banner">
          <div className="banner-grid">
            <div className="brand-statergy">
              {/* <img src="/assets/services/creative/creative.png" alt="Creative Image" className="strategy_img" /> */}
              <h1 className="text-center" style={{ color: "rgb(73 185 224)" }}>CREATIVE</h1>

              <div className="inside_text">
                <p>We believe that a strong brand strategy is the cornerstone of long-term success. Our approach goes beyond the surface, delving deep into insights about the business, the market, and the audience. By aligning purpose with positioning, we create strategies that serve as a clear roadmap for brands to thrive and evolve. It’s about crafting a vision that not only <br /> resonates today but also anticipates tomorrow’s opportunities, ensuring every brand we work with remains impactful and relevant.</p>
              </div>
            </div>
            <div className="pen-animation">
              <img src="/assets/services/creative/circle.png" alt="circle image" className="circle_img" />
              <img src="/assets/services/creative/pen.png" alt="pen image" className="pen_image" />
              <img src="/assets/services/creative/fire.png" alt="fire arrows" className="fire" />
            </div>
          </div>
        </div>

        <div className="third_banner">
          <div className="banner-grid">
            <div className="boy-animation">
              <img src="/assets/services/packaging/circle.png" alt="circle image" className="circle_img" />
              <img src="/assets/services/packaging/boy_eyes_open.png" alt="Boy with open eyes" className="boy_image" />
              <img src="/assets/services/packaging/boy_eyes_close.png" alt="Boy with closed eyes" className="boy_image_close" />
            </div>
            <div className="brand-statergy">
              {/* <img src="/assets/services/packaging/packaging.png" alt="packaging Image" className="strategy_img" /> */}
                            <h1 className="text-center" style={{ color: "#ffeb00" }}>PACKAGING</h1>

              <div className="inside_text">
                <p>We believe that a strong brand strategy is the cornerstone of long-term success. Our approach goes beyond the surface, delving deep into insights about the business, the market, and the audience. By aligning purpose with positioning, we create strategies that serve as a clear roadmap for brands to thrive and evolve. It’s about crafting a vision that not only <br /> resonates today but also anticipates tomorrow’s opportunities, ensuring every brand we work with remains impactful and relevant.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="fourth_banner">
      <div className="banner-grid">
        <div className="brand-strategy">
          {/* <img src="/assets/services/socialMedia/social_media.png" alt="Social Media Image" className="strategy_img" /> */}
                        <h1 className="text-center" style={{ color: "rgb(73 185 224)" }}>SOCIAL MEDIA  <h2>SHOOTS/REELS/CONTENT</h2></h1>

          <div className="inside_text">
            <p>We believe that a strong brand strategy is the cornerstone of long-term success. Our approach goes beyond the surface, delving deep into insights about the business, the market, and the audience. By aligning purpose with positioning, we create strategies that serve as a clear roadmap for brands to thrive and evolve. It’s about crafting a vision that not only <br /> resonates today but also anticipates tomorrow’s opportunities, ensuring every brand we work with remains impactful and relevant.</p>
          </div>
        </div>
        <div className="post-animation">
          <img src="/assets/services/socialMedia/circle.png" alt="Circle Image" className="circle_img" />
          <img src="/assets/services/socialMedia/post.png" alt="Post Image" className="post_image" />
        </div>
      </div>
    </div>
    <div className="fifth_banner">
      <div className="banner-grid">
        <div className="social-animation">
          <img src="/assets/services/digitalMedia/circle.png" alt="Circle Image" className="circle_img" />
          <img src="/assets/services/digitalMedia/hash.png" alt="Hash Image" className="hash_image" />
        </div>
        <div className="socialMedia-strategy">
          {/* <img src="/assets/services/digitalMedia/digital_media.png" alt="Digital Media Image" className="strategy_img" /> */}
                        <h1 className="text-center" style={{ color: "#ffeb00" }}>DIGITAL MEDIA</h1>

          <div className="inside_text">
            <p>We believe that a strong brand strategy is the cornerstone of long-term success. Our approach goes beyond the surface, delving deep into insights about the business, the market, and the audience. By aligning purpose with positioning, we create strategies that serve as a clear roadmap for brands to thrive and evolve. It’s about crafting a vision that not only <br /> resonates today but also anticipates tomorrow’s opportunities, ensuring every brand we work with remains impactful and relevant.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="sixth_banner">
      <div className="banner-grid">
        <div className="brand-strategy">
          {/* <img src="/assets/services/seo/seo.png" alt="SEO Image" className="strategy_img" /> */}
                        <h1 className="text-center" style={{ color: "rgb(73 185 224)" }}>SEO/WEBSITE/E-COMMERCE</h1>

          <div className="inside_text">
            <p>We believe that a strong brand strategy is the cornerstone of long-term success. Our approach goes beyond the surface, delving deep into insights about the business, the market, and the audience. By aligning purpose with positioning, we create strategies that serve as a clear roadmap for brands to thrive and evolve. It’s about crafting a vision that not only <br /> resonates today but also anticipates tomorrow’s opportunities, ensuring every brand we work with remains impactful and relevant.</p>
          </div>
        </div>
        <div className="chart-animation">
          <img src="/assets/services/seo/circle.png" alt="Circle Image" className="circle_img" />
          <img src="/assets/services/seo/chart.png" alt="Chart Image" className="chart_image" />
        </div>
      </div>
    </div>

      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Services;