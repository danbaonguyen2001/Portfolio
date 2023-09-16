import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Work from "../components/Work";
import Footer from "../components/Footer";
import Main from "./Main";

const Layout = () => {
  return (
    <div className="bg-white dark:bg-primary-dark  mx-auto px-4 lg:px-20 ">
      <Navbar></Navbar>
      <Main></Main>
    </div>
  );
};

export default Layout;
