import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/contact.scss";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact"></div>
      <div className="contact-container">
        {/* Left Side - Contact Details & Google Maps */}
        <div className="contact-info">
          <div className="contact-details">
            <div className="detail">
              <FaPhone className="icon" />
              <div>
                <h4>PHONE NUMBER:</h4>
                <p>0-274-441-5005</p>
              </div>
            </div>
            <div className="detail">
              <FaEnvelope className="icon" />
              <div>
                <h4>EMAIL ADDRESS:</h4>
                <p>hello@construction.me</p>
              </div>
            </div>
            <div className="detail">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h4>OFFICE ADDRESS:</h4>
                <p>5252 E Walnut Ave, Orange, CA</p>
              </div>
            </div>
            <div className="detail">
              <FaClock className="icon" />
              <div>
                <h4>OPENING TIMES:</h4>
                <p>Mon - Sat: 7.00 - 16:00</p>
              </div>
            </div>
          </div>
          {/* Google Maps Placeholder */}
          <div className="map-placeholder">
            <p>Oops! Something went wrong.</p>
            <span>
              This page didn't load Google Maps correctly. See the JavaScript console for technical details.
            </span>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form-container">
          <p>
            Call or submit our online form to request an estimate or for general questions about our services.
            We look forward to serving you!
          </p>
          <form className="contact-form">
            <div className="input-group">
              <label>FULL NAME</label>
              <input type="text" required />
            </div>
            <div className="input-row">
              <div className="input-group">
                <label>EMAIL ADDRESS</label>
                <input type="email" required />
              </div>
              <div className="input-group">
                <label>PHONE NUMBER</label>
                <input type="text" required />
              </div>
            </div>
            <div className="input-group">
              <label>SUBJECT</label>
              <input type="text" required />
            </div>
            <div className="input-group">
              <label>MESSAGE</label>
              <textarea rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">SUBMIT</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
