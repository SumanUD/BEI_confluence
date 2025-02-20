import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.scss";
import BEILogo from "/assets/BEI_Logo.png";

const Navbar = () => {
  const location = useLocation(); // Get current URL

  useEffect(() => {
    const navButton = document.querySelector(".nav-button");

    if (navButton) {
      const toggleNav = (e) => {
        e.preventDefault();
        document.body.classList.toggle("nav-visible");
      };

      navButton.addEventListener("click", toggleNav);

      return () => {
        navButton.removeEventListener("click", toggleNav);
      };
    }
  }, []);

  return (
    <>
      <header>
      <Link to="/">
        <img src={BEILogo} alt="BEI Logo" />
      </Link>

        <button
          className="nav-button button-lines button-lines-x close"
          type="button"
          aria-label="Toggle menu"
        >
          <span className="lines"></span>
        </button>
      </header>

      <nav className="nav-wrapper">
        <ul className="nav">
          <li className={location.pathname === "/about" ? "active" : ""}>
            <Link to="/about">About us</Link>
          </li>
          <li className={location.pathname === "/work" ? "active" : ""}>
            <Link to="/work">Work</Link>
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
        <span className="nav-marker color-1"></span>
      </nav>
    </>
  );
};

export default Navbar;
