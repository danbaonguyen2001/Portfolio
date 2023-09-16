import React from "react";
import About from "../components/About";
import Work from "../components/Work";
import Home from "../components/Home";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const Main = () => {
  return (
    <div className="text-light-text dark:text-dark-text ">
      <Home />
      {/* <About /> */}
      <Skills />
      <Work />
      <Contact />
    </div>
  );
};

export default Main;
