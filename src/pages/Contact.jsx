import { useState } from 'react';
import "../styles/contact.scss";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    number: '',
    website: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="contact-form">
      <Navbar />
      <div className="contact-contents">
        <img src="/public/assets/contactNew.png" className='contactImage' alt="contactImage"/>
        {/* <p>GOT AN IDEA</p> */}
        <h2>Drop Us A Message</h2>
        <p>We're excited to work with you soon! Please drop an email with your details & requirements to <a href="mailto:bd@beiconfluence.com">bd@beiconfluence.com</a>.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Your Organization's Name</label>
            <input 
              type="text" 
              name="organization" 
              value={formData.organization} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Your Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Your Number</label>
            <input 
              type="text" 
              name="number" 
              value={formData.number} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Website/Social Media Link</label>
            <input 
              type="url" 
              name="website" 
              value={formData.website} 
              onChange={handleChange} 
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactForm;
