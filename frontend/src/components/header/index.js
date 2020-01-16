import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import logo from "../../assets/home/logo.png";

const Header = () => {
  return (
    <header className="header">
      <label for="toggle">&#9776;</label>
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <input type="checkbox" id="toggle" />
      <div>
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/strains">Strains</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
