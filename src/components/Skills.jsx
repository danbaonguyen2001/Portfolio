import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import REACT from "../assets/react.png";
import NodeJS from "../assets/node.png";
import Tailwind from "../assets/tailwind.png";
import Github from "../assets/github.png";
import Figma from "../assets/figma.png";
import Mongodb from "../assets/mongo.png";

const Skills = () => {
  return (
    <section name="skills" className="w-full h-screen">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="">
          <h1 className="dark:text-dark-text-heading text- text-4xl font-bold inline border-b-4 border-[#38BDF8]">
            Skills
          </h1>
          <p className="py-4"> // These are technologies I've worked with </p>
        </div>
        <ul className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8  ">
          <li className="shadow-lg dark:shadow-[#040c16] rounded-lg hover:scale-110 duration-500 py-2">
            <figure className="flex flex-col justify-center items-center gap-2">
              <img src={HTML} alt="HTML icon" className="w-20" />
              <p>HTML</p>
            </figure>
          </li>
          <li className="shadow-lg dark:shadow-[#040c16] rounded-lg hover:scale-110 duration-500 py-2">
            <figure className="flex flex-col justify-center items-center gap-2">
              <img src={CSS} alt="CSS icon" className="w-20" />
              <p>CSS</p>
            </figure>
          </li>
          <li className="shadow-lg dark:shadow-[#040c16] rounded-lg hover:scale-110 duration-500 py-2">
            <figure className="flex flex-col justify-center items-center gap-2">
              <img src={Javascript} alt="Javascript icon" className="w-20" />
              <p>Javascript</p>
            </figure>
          </li>
          <li className="shadow-lg dark:shadow-[#040c16] rounded-lg hover:scale-110 duration-500 py-2">
            <figure className="flex flex-col justify-center items-center gap-2">
              <img src={REACT} alt="REACT icon" className="w-20" />
              <p>ReactJS</p>
            </figure>
          </li>
          <li className="shadow-lg dark:shadow-[#040c16] rounded-lg hover:scale-110 duration-500 py-2">
            <figure className="flex flex-col justify-center items-center gap-2">
              <img src={NodeJS} alt="NodeJS icon" className="w-20" />
              <p>NodeJS</p>
            </figure>
          </li>
          <li className="shadow-lg dark:shadow-[#040c16] rounded-lg hover:scale-110 duration-500 py-2">
            <figure className="flex flex-col justify-center items-center gap-2">
              <img src={Tailwind} alt="Tailwind icon" className="w-20" />
              <p>TailwindCSS</p>
            </figure>
          </li>
          <li className="shadow-lg dark:shadow-[#040c16] rounded-lg hover:scale-110 duration-500 py-2">
            <figure className="flex flex-col justify-center items-center gap-2">
              <img src={Mongodb} alt="Mongodb icon" className="w-20" />
              <p>Mongodb</p>
            </figure>
          </li>
          <li className="shadow-lg dark:shadow-[#040c16] rounded-lg hover:scale-110 duration-500 py-2">
            <figure className="flex flex-col justify-center items-center gap-2">
              <img src={Github} alt="Github icon" className="w-20" />
              <p>Github</p>
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
