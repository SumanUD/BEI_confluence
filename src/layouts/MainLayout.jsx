import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/global.scss"

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="main_container">{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
