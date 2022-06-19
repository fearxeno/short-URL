import React from "react";
import fb from "../images/icon-facebook.svg";
import twt from "../images/icon-twitter.svg";
import pin from "../images/icon-pinterest.svg";
import ig from "../images/icon-instagram.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h1>Shortly</h1>
      <nav className="footer-nav">
        <div className="footer item">
          <h3>Features</h3>
          <ul>
            <li className="">
              <a href="/">Link Shortening</a>
              <a href="/">Branded Links</a>
              <a href="/">Analytics</a>
            </li>
          </ul>
        </div>
        <div className="footer item">
          <h3>Resources</h3>
          <ul>
            <li className="">
              <a href="/">Blog</a>
              <a href="/">Developers</a>
              <a href="/">Support</a>
            </li>
          </ul>
        </div>
        <div className="footer item">
          <h3>Company</h3>
          <ul>
            <li className="">
              <a href="/">About</a>
              <a href="/">Our Team</a>
              <a href="/">Careers</a>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="icons">
        <a href="/">
          <img src={fb} alt="" />
        </a>
        <a href="/">
          <img src={twt} alt="" />
        </a>
        <a href="/">
          <img src={pin} alt="" />
        </a>
        <a href="/">
          <img src={ig} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
