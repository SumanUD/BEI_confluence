import "../styles/Footer.scss"
import React from 'react';
import { FaFacebook, FaTwitter, FaDribbble, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
             BEI is a full-service integrated independent advertising agency with over 26 years of experience in building brands.
              From crafting cutting-edge brand strategies, executing captivating creative campaigns, and making the most of digital marketing expertise, BEI Confluence is your one-stop destination for all things advertising.
            </p>
          </div>

          {/* <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
              <li><a href="http://scanfcode.com/category/android/">Android</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
            </ul>
          </div> */}

          <div className="col-xs-6 col-md-2">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="/work">Work</a></li>
              <li><a href="/contact">Contact</a></li>

            </ul>
          </div>



          <div className="col-xs-6 col-md-3">
            <h6>Contact Information</h6>

          <address>
          7th Floor, Unit Number - 701, 702, 703 & 704
          Tower B, Phase 1, Sector 37, Faridabad
          121003 Haryana
          India
<br/>
          +91-0129-6922000
<br/>

           infoconfluence@confluencecommunication.com
          </address>

           
          </div>
        </div>
        <hr />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              &copy; 2025 All Rights Reserved by <a href="#">BEI Confluence</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><FaFacebook /></a></li>
              <li><a className="twitter" href="#"><FaTwitter /></a></li>
              <li><a className="dribbble" href="#"><FaDribbble /></a></li>
              <li><a className="linkedin" href="#"><FaLinkedin /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
