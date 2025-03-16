import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/work.scss";

const brands = [
  { name: "CRAX", link: "/brand2", logo: "/assets/brand_logo/Crax.png", className: "crax" },
  { name: "8PM", link: "/brand1", logo: "/assets/brand_logo/8PM.png", className: "eight-pm" },
  { name: "GYAN", link: "/brand1", logo: "/assets/brand_logo/Gyan.png", className: "gyan" },
  { name: "IIL", link: "/brand1", logo: "/assets/brand_logo/IIL.png", className: "iil" },
  
];

const listVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Work = () => {
  return (
    <>
      <Navbar />
      <div className="work">
        <motion.ul className="brands" variants={listVariants} initial="hidden" animate="visible">
          {brands.map((brand, index) => (
            <motion.li key={index} variants={itemVariants} className={brand.className}>
              <Link to={brand.link}>{brand.name}</Link>
              <div className="brand-logo" style={{ backgroundImage: `url(${brand.logo})` }} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </>
  );
};

export default Work;
