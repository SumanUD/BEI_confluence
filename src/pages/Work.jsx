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
  { name: "ENGLISH OVEN", link: "/english-oven", logo: "/assets/brand_logo/EnglishOven.png", className: "english-oven" },
  { name: "TOTAL ENERGIES", link: "/total-energies", logo: "/assets/brand_logo/Total_LOGO.png", className: "total-energies" },
  { name: "BIRYANI BY KILO", link: "/bbk", logo: "/assets/brand_logo/BBK.png", className: "bbk" },
  { name: "MEDERMA", link: "/mederma", logo: "/assets/brand_logo/MEDERMA.png", className: "mederma" },
  { name: "APOLLO DIAGNOSTICS", link: "/apollo", logo: "/assets/brand_logo/Apollo_Copy.png", className: "apollo" },
  { name: "ZIGGY", link: "/ziggy", logo: "/assets/brand_logo/Ziggy.png", className: "ziggy" },
  { name: "CRAX", link: "/crax", logo: "/assets/brand_logo/Crax.png", className: "crax" },
  { name: "GYAN DAIRY", link: "/gyan", logo: "/assets/brand_logo/Gyan.png", className: "gyan" },
  { name: "WAI WAI", link: "/wai-wai", logo: "/assets/brand_logo/WaiWai.png", className: "wai-wai" },
  { name: "HARVEST GOLD", link: "/harvest-gold", logo: "/assets/brand_logo/HarvestGold.png", className: "harvest-gold" },
  { name: "UMANG DAIRY", link: "/umang-dairy", logo: "/assets/brand_logo/UmangDairy.png", className: "umang-dairy" },
  { name: "SCHMITTEN CHOCOLATES", link: "/schmitten", logo: "/assets/brand_logo/Schmitten.png", className: "schmitten" },
  { name: "NANDO’S", link: "/nandos", logo: "/assets/brand_logo/Nandos.png", className: "nandos" },
  { name: "KEROVIT", link: "/kerovit", logo: "/assets/brand_logo/Kerovit.png", className: "kerovit" },
  { name: "JSL", link: "/jsl", logo: "/assets/brand_logo/JSL.png", className: "jsl" },
  { name: "ECE (BIRLA GROUP)", link: "/ece", logo: "/assets/brand_logo/ECE.png", className: "ece" },
  { name: "TRIDENT REALTY", link: "/trident-realty", logo: "/assets/brand_logo/Trident.png", className: "trident" }
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

