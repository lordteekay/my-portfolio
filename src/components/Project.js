import React from "react";
import "./Project.css";
const Project = () => {
  return (
    <div className="project" id="Portfolio">
      <div className="project__heading">
        <h1>My Latest Projects</h1>
        <p>Here are some of the projects i'm working on,</p>
        <p>Not all are completed though.</p>
      </div>
      <div className="project__container">
        <div className="project__box first">
          <img src="/img/portfolio-1.jpg" alt="project1-img" />
          <div className="upper__layer">
            <p>Development</p>
            <h2>Gettting tickets to the big show</h2>
            <button>View Details</button>
          </div>
        </div>
        <div className="project__box second">
          <img src="/img/portfolio-2.jpg" alt="project1-img" />
          <div className="upper__layer">
            <p>Development</p>
            <h2>Gettting tickets to the big show</h2>
            <button>View Details</button>
          </div>
        </div>
        <div className="project__box third">
          <img src="/img/portfolio-3.jpg" alt="project1-img" />
          <div className="upper__layer">
            <p>Development</p>
            <h2>Gettting tickets to the big show</h2>
            <button>View Details</button>
          </div>
        </div>
        <div className="project__box fourth">
          <img src="/img/portfolio-4.jpg" alt="project1-img" />
          <div className="upper__layer">
            <p>Development</p>
            <h2>Gettting tickets to the big show</h2>
            <button>View Details</button>
          </div>
        </div>
        <div className="project__box fifth">
          <img src="/img/portfolio-1.jpg" alt="project1-img" />
          <div className="upper__layer">
            <p>Development</p>
            <h2>Gettting tickets to the big show</h2>
            <button>View Details</button>
          </div>
        </div>
        <div className="project__box sixth">
          <img src="/img/portfolio-1.jpg" alt="project1-img" />
          <div className="upper__layer">
            <p>Development</p>
            <h2>Gettting tickets to the big show</h2>
            <button>View Details</button>
          </div>
        </div>
      </div>
      <div className="project__more">
        <button>View More</button>
      </div>
    </div>
  );
};

export default Project;
