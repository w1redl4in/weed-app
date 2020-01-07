import React from "react";
import logo from "../../assets/weed-assets/075-Cannabis.svg";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <div className="container">
      <img src={logo} alt="maconha" />
      <Link to="/weeds" style={{ textDecoration: "none", color: "white" }}>
        <h1>WEEDS</h1>
      </Link>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <h2>HOME</h2>
      </Link>
      <h3>ABOUT US</h3>
    </div>
  );
};

export default Header;
