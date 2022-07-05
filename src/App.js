import React from "react";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Project from "./components/Project";
import Service from "./components/Service";

const App = () => {
  return <div>
    <Home/>
    <About/>
    <Service/>
    <Project/>
    <Blog/>
    <Contact/>
  </div>;
};

export default App;
