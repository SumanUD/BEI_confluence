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
          <div className="bulb-animation">
            <img src="/assets/services/circle.png" alt="circle image" className="circle_img" />
            <img src="/assets/services/bulb.png" alt="bulb image" className="bulb_image" />
            <img src="/assets/services/light_arrows.png" alt="light arrows" className="light_arrows" />
          </div>
          <div className="brand-statergy">
            <img src="/assets/services/brandStatergy.png" alt="Brand Statergy Image" />
            <div className="inside_text">
              <p> We believe that a strong brand strategy is the
                cornerstone of long-term success. Our approach goes
                beyond the surface, delving deep into insights about the
                business, the market, and the audience. By aligning purpose
                with positioning, we create strategies that serve as a clear
                roadmap for brands to thrive and evolve. It’s about crafting
                a vision that not only <br />
                resonates today but also anticipates tomorrow’s
                opportunities, ensuring every brand we work with
                remains impactful and relevant.</p>
            </div>
          </div>
        </div>

        <div className="second_banner">
          <div className="brand-statergy">
            <img src="/assets/services/creative/creative.png" alt="Creative Image" />
            <div className="inside_text">
              <p> We believe that a strong brand strategy is the
                cornerstone of long-term success. Our approach goes
                beyond the surface, delving deep into insights about the
                business, the market, and the audience. By aligning purpose
                with positioning, we create strategies that serve as a clear
                roadmap for brands to thrive and evolve. It’s about crafting
                a vision that not only <br />
                resonates today but also anticipates tomorrow’s
                opportunities, ensuring every brand we work with
                remains impactful and relevant.</p>
            </div>
          </div>
          <div className="pen-animation">
            <img src="/assets/services/creative/circle.png" alt="circle image" className="circle_img" />
            <img src="/assets/services/creative/pen.png" alt="pen image" className="pen_image" />
            <img src="/assets/services/creative/fire.png" alt="fire arrows" className="fire" />
          </div>

        </div>

        <div className="third_banner">
          <div className="boy-animation">
            <img src="/assets/services/packaging/circle.png" alt="circle image" className="circle_img" />
            <img src="/assets/services/packaging/boy_eyes_open.png" alt="Boy with open eyes" className="boy_image" />
            <img src="/assets/services/packaging/boy_eyes_close.png" alt="Boy with closed eyes" className="boy_image_close" />
          </div>
          <div className="brand-statergy">
            <img src="/assets/services/packaging/packaging.png" alt="packaging Image" />
            <div className="inside_text">
              <p> We believe that a strong brand strategy is the
                cornerstone of long-term success. Our approach goes
                beyond the surface, delving deep into insights about the
                business, the market, and the audience. By aligning purpose
                with positioning, we create strategies that serve as a clear
                roadmap for brands to thrive and evolve. It’s about crafting
                a vision that not only <br />
                resonates today but also anticipates tomorrow’s
                opportunities, ensuring every brand we work with
                remains impactful and relevant.</p>
            </div>
          </div>
        </div>

        <div className="fourth_banner">
          <div className="brand-statergy">
            <img src="/assets/services/socialMedia/social_media.png" alt="social Media Image" />
            <div className="inside_text">
              <p> We believe that a strong brand strategy is the
                cornerstone of long-term success. Our approach goes
                beyond the surface, delving deep into insights about the
                business, the market, and the audience. By aligning purpose
                with positioning, we create strategies that serve as a clear
                roadmap for brands to thrive and evolve. It’s about crafting
                a vision that not only <br />
                resonates today but also anticipates tomorrow’s
                opportunities, ensuring every brand we work with
                remains impactful and relevant.</p>
            </div>
          </div>
          <div className="post-animation">
            <img src="/assets/services/socialMedia/circle.png" alt="circle image" className="circle_img" />
            <img src="/assets/services/socialMedia/post.png" alt="post image" className="post_image" />
          </div>

        </div>

        <div className="fifth_banner">
          <div className="social-animation">
            <img src="/assets/services/digitalMedia/circle.png" alt="circle image" className="circle_img" />
            <img src="/assets/services/digitalMedia/hash.png" alt="Hash Images" className="hash_image" />
          </div>
          <div className="socialMedia-statergy">
            <img src="/assets/services/digitalMedia/digital_media.png" alt="Digital Media Image" />
            <div className="inside_text">
              <p> We believe that a strong brand strategy is the
                cornerstone of long-term success. Our approach goes
                beyond the surface, delving deep into insights about the
                business, the market, and the audience. By aligning purpose
                with positioning, we create strategies that serve as a clear
                roadmap for brands to thrive and evolve. It’s about crafting
                a vision that not only <br />
                resonates today but also anticipates tomorrow’s
                opportunities, ensuring every brand we work with
                remains impactful and relevant.</p>
            </div>
          </div>
        </div>

        <div className="sixth_banner">
          <div className="brand-statergy">
            <img src="/assets/services/seo/seo.png" alt="SEO Image" />
            <div className="inside_text">
              <p> We believe that a strong brand strategy is the
                cornerstone of long-term success. Our approach goes
                beyond the surface, delving deep into insights about the
                business, the market, and the audience. By aligning purpose
                with positioning, we create strategies that serve as a clear
                roadmap for brands to thrive and evolve. It’s about crafting
                a vision that not only <br />
                resonates today but also anticipates tomorrow’s
                opportunities, ensuring every brand we work with
                remains impactful and relevant.</p>
            </div>
          </div>
          <div className="chart-animation">
            <img src="/assets/services/seo/circle.png" alt="circle image" className="circle_img" />
            <img src="/assets/services/seo/chart.png" alt="chart image" className="chart_image" />
          </div>

        </div>

      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Services;