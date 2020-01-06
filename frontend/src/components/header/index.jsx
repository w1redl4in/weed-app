import React from "react";
import logo from "../../assets/weed-assets/075-Cannabis.svg";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <>
      <header className="container">
        <ul className="navbar">
          <Link to="/">
            <img src={logo} />
          </Link>
          <Link to="/weeds">
            <li>WEEDS</li>
          </Link>
          <li>ABOUT US</li>
          <li>CONTACT</li>
        </ul>
      </header>
    </>
  );
};

export default Header;
