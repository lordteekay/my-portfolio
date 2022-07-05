import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Header from "../assets/Header";
import Main from "../assets/Main";
import "./Home.css";
const Home = () => {
  const [state, setstate] = useState(false);
  function handleclick() {
    console.log("clicked");
    setstate((prevstate) => {
      return !prevstate;
    });
  }
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <Header />
        {state ? (
          <div className="menu" onClick={handleclick}>
            <FaTimes className="menu_click" />
          </div>
        ) : (
          <div className="menu" onClick={handleclick}>
            <FaBars className="menu_click" />
          </div>
        )}{" "}
        {state && (
          <div className="cancel">
            <nav className="small_nav__bar">
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
        )}
        <Main />
      </div>
    </div>
  );
};

export default Home;
