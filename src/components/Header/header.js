import { React, useState } from "react";
import "./header.css";
import Logo from "../../assests/logo.png";
import { Link } from "react-router-dom";
import { AiFillFire } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { FaFilm } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
function Header() {
  const [toggle, setToggle] = useState(false);

  const toggleNav = () => {
    setToggle(!toggle);
  };
  return (
    <div className="start">
      <Link to="/" className="logolink">
        <div className="header">
          <h1>MovieMania</h1>
          <img src={Logo} alt="Logo" className="logo" />
        </div>
      </Link>
      <div className="hamburger" onClick={toggleNav}>
        <GiHamburgerMenu />
      </div>
      <span className={toggle ? "Nlinks" : "links"}>
        <ul >
        <li onClick={toggleNav}>

<AiOutlineClose className="closes" />
  </li>

          <li>
            <Link to="/">
              <FaHome />
              Home
            </Link>
          </li>
          <li>
            <Link to="/Topmovies">
              <FaFilm />
              Top
            </Link>
          </li>
          <li>
            <Link to="/Popularmovies">
              <AiFillFire />
              Popular
            </Link>
          </li>
          <li>
            <Link to="/Trendingmovies">
              <BiTrendingUp />
              Trending
            </Link>
          </li>
    
        </ul>
      </span>
    </div>
  );
}

export default Header;
