import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/news.scss";
import { useEffect, useState } from "react";

const News = () => {

  const [loading, setLoading] = useState(true);
  const handleLoadingScreen = (action) => {
    setTimeout(() => {
      setLoading(action)
    }, 2500);
  }

  handleLoadingScreen(false)

  return (
    <>
      {
        loading && 
        <div className="loadingScreen">
          <img src="/assets/gif/BEI_logo.gif" alt="" />
        </div>
      }
      <Navbar />
      <div className="news">

      </div>
      <Footer />
    </>
  );
};

export default News;
