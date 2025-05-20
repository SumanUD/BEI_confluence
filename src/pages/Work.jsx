// import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/work.scss";
import { useState } from "react";

const brands = [
  { name: "8PM", link: "/brand1", logo: "/assets/brand_logo/8PM.png", className: "eight-pm" , position:0},
  { name: "ENGLISH OVEN", link: "/english-oven", logo: "/assets/brand_logo/EnglishOven.png", className: "english-oven" ,position:1},
  { name: "TOTAL ENERGIES", link: "/total-energies", logo: "/assets/brand_logo/Total_LOGO.png", className: "total-energies",position:2 },
  { name: "BIRYANI BY KILO", link: "/bbk", logo: "/assets/brand_logo/BBK.png", className: "bbk" ,position:0},
  { name: "MEDERMA", link: "/mederma", logo: "/assets/brand_logo/MEDERMA.png", className: "mederma" ,position:1},
  { name: "APOLLO DIAGNOSTICS", link: "/apollo", logo: "/assets/brand_logo/Apollo_Copy.png", className: "apollo" ,position:2},
  { name: "ZIGGY", link: "/ziggy", logo: "/assets/brand_logo/Ziggy.png", className: "ziggy" ,position:0},
  { name: "CRAX", link: "/crax", logo: "/assets/brand_logo/Crax.png", className: "crax" ,position:1},
  { name: "GYAN DAIRY", link: "/gyan", logo: "/assets/brand_logo/Gyan.png", className: "gyan" ,position:2},
  { name: "WAI WAI", link: "/wai-wai", logo: "/assets/brand_logo/WaiWai.png", className: "wai-wai" ,position:0},
  { name: "HARVEST GOLD", link: "/harvest-gold", logo: "/assets/brand_logo/HarvestGold.png", className: "harvest-gold" ,position:1},
  { name: "UMANG DAIRY", link: "/umang-dairy", logo: "/assets/brand_logo/UmangDairy.png", className: "umang-dairy" ,position:2},
  { name: "SCHMITTEN CHOCOLATES", link: "/schmitten", logo: "/assets/brand_logo/Schmitten.png", className: "schmitten" ,position:0},
  { name: "NANDO’S", link: "/nandos", logo: "/assets/brand_logo/Nandos.png", className: "nandos" ,position:1},
  { name: "KEROVIT", link: "/kerovit", logo: "/assets/brand_logo/Kerovit.png", className: "kerovit" ,position:2},
  { name: "JSL", link: "/jsl", logo: "/assets/brand_logo/JSL.png", className: "jsl" ,position:0},
  { name: "ECE (BIRLA GROUP)", link: "/ece", logo: "/assets/brand_logo/ECE.png", className: "ece" ,position:1},
  { name: "TRIDENT REALTY", link: "/trident-realty", logo: "/assets/brand_logo/Trident.png", className: "trident" ,position:2}
];

// const listVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
// };

// const itemVariants = {
//   hidden: { opacity: 0, x: 50 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
// };

const Work = () => {

  const [activeLogo, setActiveLogo] = useState('');  
  const logoPosition = {
    0: "position1",
    1: "position2",
    2: "position3"
  }  
  return (
    <>
      <Navbar />
      <div className="work">
        <div className="logo">
          {
            brands.map((brand, index)=>(
              <img src={brand.logo} alt={brand.name} key={index} className={` ${activeLogo == brand.name ? 'active-logo': ''} ${logoPosition[brand.position]}`}/>
            ))
          }
        </div>
        <ul className="brands">
          {
            brands.map((brand, index)=>(
              <li key={index} onMouseEnter={()=>setActiveLogo(brand.name)} onMouseLeave={()=> setActiveLogo(' ')}>
                <Link to={brand.link}>{brand.name}</Link>
                {/* <div className="brand-logo">
                  <img src={brand.logo} alt="" />
                </div> */}
              </li>
            ))
          }
        </ul>
      </div>
    </>
  );
};

export default Work;

