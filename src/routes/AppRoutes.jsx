import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/About";
import Work from "../pages/Work";
import Services from "../pages/Services";
import News from "../pages/News";
import Contact from "../pages/Contact";
import Brand from "../pages/Brand";
import Brand2 from "../pages/Brand2";
import Brand3 from "../pages/Brand3";
import EnglishOven from "../pages/EnglishOven";
import TotalEnergies from "../pages/totalEnergies";
import Bbk from "../pages/Bbk";
import Mederma from "../pages/mederma";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/work" element={<Work />} />
        <Route path="/services" element={<Services />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/brand1" element={<Brand />} />
        <Route path="/brand2" element={<Brand2 />} />
        <Route path="/brand3" element={<Brand3 />} />
        <Route path="/english-oven" element={<EnglishOven />} />
        <Route path="/total-energies" element={<TotalEnergies />} />
        <Route path="/bbk" element={<Bbk />} />
        <Route path="/mederma" element={<Mederma />} />


      </Routes>
    </Router>
  );
};

export default App;
