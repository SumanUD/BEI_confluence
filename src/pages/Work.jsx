// import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/work.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Work = () => {

  const [activeLogo, setActiveLogo] = useState('');  
  const logoPosition = {
    0: "position1",
    1: "position2",
    2: "position3"
  }  

  const api = import.meta.env.VITE_API_URL;

  const [brandList, setBarndList] = useState([])
  useEffect(()=>{
    async function callAPI(){
      try{
        const res = await axios.get(api + '/allbrands');
        let newArr = res.data.data?.sort((a,b) => a.id - b.id)
        let arrWithPosition = newArr.map((obj, index)=>({
          ...obj,
          position: index % 3
        }))
        setBarndList(arrWithPosition)        
      }catch(err){
        console.log(err)
      }finally{
        handleLoadingScreen(false)
      }
    }

    callAPI()
  }, [])


  const [loading, setLoading] = useState(true);
  const handleLoadingScreen = (action) => {
    setTimeout(() => {
      setLoading(action)
    }, 1000);
  }

  return (
    <>
      {
        loading && 
        <div className="loadingScreen">
          <img src="/assets/gif/BEI_logo.gif" alt="" />
        </div>
      }
      <Navbar />
      <div className="work">
        <div className="logo">
          {
            brandList.map((brand, index)=>(
              <img src={brand.brand_logo} alt={brand.name} key={index} className={` ${activeLogo == brand.brand_name ? 'active-logo': ''} ${logoPosition[brand.position]}`}/>
            ))
          }
        </div>
        <ul className="brands">
          {
            brandList.map((brand, index)=>(
              <li key={index} onMouseEnter={()=>setActiveLogo(brand.brand_name)} onMouseLeave={()=> setActiveLogo(' ')}>
                <Link to={'/work/brand/'+ brand.brand_name.split(" ").join("_")}>{brand.brand_name}</Link>
                {/* <div className="brand-logo">
                  <img src={brand.logo} alt="" />
                </div> */}
              </li>
            ))
          }
        </ul>
      </div>
      <Footer/>
    </>
  );
};

export default Work;

