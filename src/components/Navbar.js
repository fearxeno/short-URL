import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  return (
    <nav className="navbar">
      <div className="item left">
        <a href="/" className="title">
          Shortly
        </a>
      </div>
      <div
        className="burger"
        onClick={() => {
          setClick(!click);
        }}
      >
        {click ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <a href="/">Features</a>
        </li>
        <li className="nav-item">
          <a href="/">Pricing</a>
        </li>
        <li className="nav-item">
          <a href="/">Resources</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
