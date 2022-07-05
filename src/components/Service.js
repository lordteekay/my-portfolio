import React from "react";
import "./Service.css";
const Service = () => {
  return (
    <div className="service" id="Services">
      <h1 style={{ textAlign: "center", fontSize: "2rem" }}>
        My Awesome Service
      </h1>
      <p style={{ textAlign: "center", padding: "10px" }}>
        These are the fantabulous services i render.
      </p>
      <div className="service__components">
        <div className="box business">
          <div className="innerBox">
            <div className="circle_img">
              <img
                src="/img/business.png"
                alt="business icon"
                style={{ width: "50px" }}
              />
            </div>
            <h3>Business Strategy</h3>
            <p>
              I effectively allocate resources for business activities and focus
              more on the strenghts and weaknesses in order to optimizes the
              strenghts and use them as competitive advantage that makes the
              company unique in the market place, and eliminates the weaknesses
              to reach the company's goals.{" "}
            </p>
          </div>
        </div>
        <div className="box development">
          <div className="innerBox">
            <div className="circle_img imgii">
              {" "}
              <img
                src="/img/web.png"
                alt="web development icon"
                style={{ width: "50px" }}
              />
            </div>
            <h3>Website Development</h3>
            <p>
              I use various web technologies to develop attractive websites
              which converts visitors to customers. I develop creative and
              responsive website layouts.
            </p>
          </div>
        </div>
        <div className="box marketing">
          <div className="innerBox">
            <div className="circle_img imgiii">
              <img
                src="/img/marketing.png"
                alt="marketing icon"
                style={{ width: "50px" }}
              />
            </div>
            <h3>Marketing & Reporting</h3>
            <p>
              I identify and evaluates new digital technologies and use web
              analytics tools to measure site traffic to better optimize
              marketing campaigns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
