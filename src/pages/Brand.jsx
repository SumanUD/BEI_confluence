import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/brand.scss";
import Button_v1 from "../components/Button";
import ImageGallery from "../components/Gallery";

const Brand = () => {
    return (
        <>
            <Navbar />
            <div className="brand">
            </div>
            <div className="below_banner">
                <img src="/assets/below_banner2.jpg" alt="Banner" className="banner-image" />
                
            <div className="below_banner_content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quo ad fuga enim unde corrupti eligendi blanditiis laboriosam aspernatur et, eos sit, veritatis a ut! Dolorum possimus doloremque veniam ipsa.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quo ad fuga enim unde corrupti eligendi blanditiis laboriosam aspernatur et, eos sit, veritatis a ut! Dolorum possimus doloremque veniam ipsa.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quo ad fuga enim unde corrupti eligendi blanditiis laboriosam aspernatur et, eos sit, veritatis a ut! Dolorum possimus doloremque veniam ipsa.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quo ad fuga enim unde corrupti eligendi blanditiis laboriosam aspernatur et, eos sit, veritatis a ut! Dolorum possimus doloremque veniam ipsa.</p>
            </div>

            </div>
            <Button_v1 />
            <ImageGallery />
            {/* <Footer /> */}
        </>
    );
};

export default Brand;
