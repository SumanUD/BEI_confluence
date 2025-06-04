import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.scss";
import BEILogogif from "/assets/BEI_Logo.png"
import axios from "axios";

const Navbar = () => {

  const {pathname} = useLocation();  

  const [openMenu, setOpenMenu] = useState(false);  

  const [OpenWork, setOpenWork] = useState(false);
  const handleOpenWorkMobile = () =>{
    setOpenWork(!OpenWork);    
  }

  const handleToggleAll = () => {
    setOpenMenu(!openMenu)
    setOpenWork(false)
  }

  useEffect(()=>{
    window.scrollTo(0,0)    
    if(pathname == '/'){
      setOpenMenu(true)      
    }else{
      setOpenMenu(false)
      setOpenWork(false)
    }    
    
  }, [pathname])  

  const api = import.meta.env.VITE_API_URL;

  const [brandList, setBarndList] = useState([])
  useEffect(()=>{
    async function callAPI(){
      try{
        const res = await axios.get(api + '/allbrands');
        let newArr = res.data.data?.sort((a,b) => a.id - b.id)
        setBarndList(newArr)        
      }catch(err){
        console.log(err)
      }
    }

    callAPI()
  }, [])

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
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === "/about" ? "active" : ""}>
            <Link to="/about">About us</Link>
          </li>
          <li className={`work-desktop ${location.pathname === "/work" ? "active" : ""}`}>
            <Link to="/work">Work</Link>
          </li>
          <li className="work-mobile">
            <p onClick={handleOpenWorkMobile}>Work <img src="/assets/right.png" alt="" /></p>
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
            <img src="/assets/right.png" alt="" onClick={()=>setOpenWork(false)} />            
          </div>
          <div className="menu-list">
            {
              brandList.map((brand, index)=>(
                <div key={index}>
                  <Link to={'/work/brand/'+ brand.brand_name.split(" ").join("_")}>{brand.brand_name}</Link>
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
