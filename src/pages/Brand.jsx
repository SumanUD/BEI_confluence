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
                    <p>Introducing 8PM Premium Black, India’s new benchmark in premium whisky. Crafted as a Master’s Selection, it’s designed for connoisseurs who appreciate the finer things in life. This exceptional blend is a tribute to success, friendship, and the unique camaraderie that even transforms rivals into friends over a shared drink.
                        With its premium packaging, 8PM Premium Black exudes international appeal, rivaling the elegance of Scotch whiskies. The crystal-like detailing on the bottle speaks of class and sophistication, making every sip a celebration of taste and style.
                    </p>
                </div>

            </div>
            {/* <Button_v1 /> */}
            <div className="button_container">
                <button className="brand_button" type="submit">Learn More</button>
            </div>
            <ImageGallery />
            <Footer />
        </>
    );
};

export default Brand;
