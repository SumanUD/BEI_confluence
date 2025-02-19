import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/About";
import Work from "../pages/Work";
import Services from "../pages/Services";
import News from "../pages/News";
import Contact from "../pages/Contact";
import Brand from "../pages/Brand";


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

      </Routes>
    </Router>
  );
};

export default App;
