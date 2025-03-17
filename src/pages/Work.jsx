import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/work.scss";

// 8PM PREMIUM BLACK
// ENGLISH OVEN
// TOTAL ENERGIES
// BIRYANI BY KILO
// INSECTICIDES INDIA
// MEDERMA
// APOLLO 
// ZIGGY


const brands = [
  { name: "8PM", link: "/brand1", logo: "/assets/brand_logo/8PM.png", className: "eight-pm" },
  { name: "English Oven", link: "/english-oven", logo: "/assets/brand_logo/EnglishOven.png", className: "english-oven" },
  { name: "Total Energies", link: "/english-oven", logo: "/assets/brand_logo/Total_LOGO.png", className: "total-energies" },
  { name: "BBK", link: "/english-oven", logo: "/assets/brand_logo/BBK.png", className: "bbk" },
  { name: "IIL", link: "/brand1", logo: "/assets/brand_logo/IIL.png", className: "iil" },
  { name: "Mederma", link: "/english-oven", logo: "/assets/brand_logo/MEDERMA.png", className: "mederma" },
  { name: "Apollo", link: "/english-oven", logo: "/assets/brand_logo/Apollo_Copy.png", className: "apollo" },
  { name: "Ziggy", link: "/english-oven", logo: "/assets/brand_logo/Ziggy.png", className: "ziggy" },

  { name: "CRAX", link: "/brand2", logo: "/assets/brand_logo/Crax.png", className: "crax" },
  { name: "GYAN", link: "/brand1", logo: "/assets/brand_logo/Gyan.png", className: "gyan" },
  
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

