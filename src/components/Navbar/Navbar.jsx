import React from "react";

import "./NavbarStyle.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <h3>4x4 sales</h3>
        </div>

        <ul className="nav-menu">
          <li>
            <a href="/">4Runner</a>
          </li>
          <li>
            <a href="/">G</a>
          </li>
          <li>
            <a href="/">Land Cruiser</a>
          </li>
          <li>
            <a href="/">Pajero</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Accessories</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
