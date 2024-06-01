import React from "react";
import profileImage from "/profileimage.jpg";
import "./Navbar.css";
function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <div className="inner">
            <img src={profileImage} alt="profileImage"/>
          </div>
        </div>
        <ul>
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Resume</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <p>
          © 2024 <span>NuclearThemes</span>
        </p>
      </nav>
    </div>
  );
}
import Home from "../Home/Home";

export default Navbar;
