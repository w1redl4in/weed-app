import React from "react";
import "./index.css";
import logo from "./assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <a href="/">
        <img src={logo} alt="logo" className="logo" />
      </a>
      <div>
        <ul className="menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Strains</a>
          </li>
          <li>
            <a href="/">Contato</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
