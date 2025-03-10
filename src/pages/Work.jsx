import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/work.scss";
import "../styles/global.scss";

const brands = [
  { name: "CRAX", link: "/brand2" },
  { name: "8PM", link: "/brand1" },
  { name: "TRIDENT", link: "/brand1" },
  { name: "IIL", link: "/brand1" },
  { name: "MEDERMA", link: "/brand1" },
  { name: "CREMICA/EO", link: "/brand3" },
  { name: "SCHMITTEN", link: "/brand1" },
  { name: "WAI WAI", link: "/brand1" },
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
            <motion.li key={index} variants={itemVariants}>
              <Link to={brand.link}>{brand.name}</Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Work;
