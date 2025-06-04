import { useState, useEffect } from 'react';
import "../styles/contact.scss";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import axios from 'axios';


const ContactForm = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    organization_name: '',
    email: '',
    phone_number: '',
    website_or_social_link: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [success, setSuccess] = useState(false)
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [numError, setError]= useState('')

  const generateNumber = () =>{
    setNum1(Math.floor(Math.random() * 100) + 1);
    setNum2(Math.floor(Math.random() * 100) + 1);
  }
  useEffect(()=>{
    generateNumber()
  },[])

  const api = import.meta.env.VITE_API_URL;  
  const [btnLoading, setBtnLoading] = useState(false)
  const handleSubmit = (e) => {

    e.preventDefault();    
    console.log(formData);       
    setSuccess(false) 
    async function submitForm(){
      try{
        const res = await axios.post(api+'/contact', formData)
        console.log(res)
        setFormData({
          name: '',
          organization_name: '',
          email: '',
          phone_number: '',
          website_or_social_link: '',
        })
      }catch(err){
        console.log(err)
      }finally{
        setBtnLoading(false)
        generateNumber()
        setSuccess(true)
        setFormData({
          name: '',
          organization_name: '',
          email: '',
          phone_number: '',
          website_or_social_link: '',
        })
        e.target.check_human.value = ''
      }
    }

    if(e.target.check_human.value == (num1 + num2)){
      setBtnLoading(true)
      submitForm()
      setError('')            
    }else{
      setError('Incorrect!!!')
      setSuccess(false) 
    }
  };

  const [loading, setLoading] = useState(true);
  const handleLoadingScreen = (action) => {    
    setTimeout(() => {
      setLoading(action)
    }, 2500);
  }

  handleLoadingScreen(false)

  return (
    <div className="contact-form">

      {
        loading && 
        <div className="loadingScreen">
          <img src="/assets/gif/BEI_logo.gif" alt="" />
        </div>
      }

      <Navbar />
      <div className="contact-contents">
        <img src="/assets/contactNew.png"
          className='contactImage' 
          alt="contactImage"
          decoding="async"
          fetchPriority="high"
        />
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
              name="organization_name" 
              value={formData.organization_name} 
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
              type="number" 
              name="phone_number" 
              value={formData.phone_number} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Website/Social Media Link</label>
            <input 
              type="url" 
              name="website_or_social_link" 
              value={formData.website_or_social_link} 
              onChange={handleChange} 
            />
          </div>
          <div className="form-group">
            <label>What is {num1} + {num2}? <span style={{color:'red', marginLeft:'15px'}}>{numError}</span></label>
            <input 
              type="number" 
              name="check_human"      
              required                     
            />            
          </div>          

          <div className="form-group">
            <button type="submit" disabled={btnLoading}>{btnLoading ? <span className='btn-loader'></span>:'Submit'} </button>
            {success && (
              <p>
                ✅ Message sent successfully!
              </p>
            )}
          </div>          
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactForm;
