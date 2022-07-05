import React, { useState } from "react";
import "./About.css";
const About = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div className="about" id="About">
      <div className="about__row">
        <div className="about__img">
          <img src="/img/About.png" alt="" />
        </div>
        <div className="about__text">
          <h1>About Me</h1>
          <p>
            I'm Teekay Da Hk, a professional and talented Frontend Developer
            with Backend development skills. I am passionate about leveraging my
            diverse backgrounds to decipher challenging problems and create
            delightful experiences. I honed my skills at web development and SEO
            analytics.
          </p>
          <p>
            Strong in design and integration with intuitive problem-solving
            skills. Proficient in HTML,CSS, PYTHON,JAVASCRIPT,REACT JS, AND
            BOOSTRAPCSS. Passionate about implementing and launching new
            projects. Ability to translate business requirements into technical
            solutions. Looking to start the career as an entry-level software
            engineer with a reputed firm driven by technology.{" "}
          </p>
          <p>
            I'm here to help software startups get off the ground. I enjoy
            growing teams,and collaborating to find solutions to real-world
            problems.{" "}
          </p>
          <div className="button_btn">
            <a href="#">
              <button className="btn">Download Cv</button>{" "}
            </a>
            <a href="#">
              <button className="btn">Hire Me</button>{" "}
            </a>
          </div>
        </div>
      </div>
      {/* Bottom to top button */}
      <div
        className="topBottom_btn"
        style={{ display: visible ? "flex" : "none" }}
        onClick={scrollToTop}
      >
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-up"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>{" "}
      </div>
    </div>
  );
};

export default About;
