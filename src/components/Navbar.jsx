import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.scss";
import BEILogogif from "/assets/BEI_Logo.png"

const Navbar = () => {
  const location = useLocation(); // Get current URL

  const {pathname} = location;  
  // useEffect(() => {
  //   const closeNav = () => {
  //     document.body.classList.remove("nav-visible");
  //   };

  //   // Close menu when switching tabs
  //   closeNav();
  // }, [location.pathname]); // Runs every time the route changes
  

  // useEffect(() => {
  //   const navButton = document.querySelector(".nav-button");

  //   if (navButton) {
  //     const toggleNav = (e) => {
  //       e.preventDefault();
  //       document.body.classList.toggle("nav-visible");
  //     };

  //     navButton.addEventListener("click", toggleNav);

  //     return () => {
  //       navButton.removeEventListener("click", toggleNav);
  //     };
  //   }
  // }, []);

  const [openMenu, setOpenMenu] = useState(false);  

  const [OpenWork, setOpenWork] = useState(false);
  const handleOpenWorkMobile = () =>{
    setOpenWork(!OpenWork);    
  }

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

  const handleToggleAll = () => {
    setOpenMenu(!openMenu)
    setOpenWork(false)
  }

  useEffect(()=>{
    setOpenMenu(false)
    setOpenWork(false)
  }, [pathname])

  return (
    <div className={openMenu ? 'nav-visible' : ''}>
      <header>
      <Link to="/">
        <img src={BEILogogif} alt="BEI Logo" />
      </Link>

        <button
          className="nav-button button-lines button-lines-x close"
          type="button"
          aria-label="Toggle menu"
          onClick={handleToggleAll}
        >
          <span className="lines" ></span>
        </button>
      </header>
      <div className="backdrop" onClick={handleToggleAll}></div>
      <nav className="nav-wrapper">
        <ul className="nav">
          <li className={location.pathname === "/about" ? "active" : ""}>
            <Link to="/about">About us</Link>
          </li>
          <li className={`work-desktop ${location.pathname === "/work" ? "active" : ""}`}>
            <Link to="/work">Work</Link>
          </li>
          <li className="work-mobile">
            <p onClick={handleOpenWorkMobile}>Work <img src="/public/assets/right.png" alt="" /></p>
          </li>
          <li className={location.pathname === "/services" ? "active" : ""}>
            <Link to="/services">Services</Link>
          </li>
          <li className={location.pathname === "/news" ? "active" : ""}>
            <Link to="/news">In News</Link>
          </li>
          <li className={location.pathname === "/contact" ? "active" : ""}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div className={`work-mobile-contents ${OpenWork ? 'open': ''}`}>
          <div className="heading">
            <p>Brands</p>
            <img src="/public/assets/right.png" alt="" onClick={()=>setOpenWork(false)} />            
          </div>
          <div className="menu-list">
            {
              brands.map((item, index)=>(
                <div key={index}>
                  <Link to={item.link}>{item.name}</Link>
                </div>
              ))
            }
          </div>
        </div>
        <span className="nav-marker color-1"></span>
      </nav>
    </div>
  );
};

export default Navbar;
