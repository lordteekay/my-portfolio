import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="/img/Tiger.png" alt="logo" />
      </div>
      <nav className="nav__bar">
        <ul>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Services">Services</a>
          </li>
          <li>
            <a href="#Portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#Blog">Blog</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
