import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/work.scss";
import "../styles/global.scss";

const Work = () => {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },  // Starts 50px to the right
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      <Navbar />
      <div className="work">
        <motion.ul className="brands" variants={listVariants} initial="hidden" animate="visible">
          {["CRAX", "8PM", "TRIDENT", "IIL", "MEDERMA", "CREMICA/EO", "SCHMITTEN", "WAI WAI"].map((brand, index) => (
            <motion.li key={index} variants={itemVariants}>
              <Link to="/brand1">{brand}</Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <Footer />
    </>
  );
};

export default Work;
