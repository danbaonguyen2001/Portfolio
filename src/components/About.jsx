import React, { useEffect } from "react";

const About = () => {
  return (
    <section name="about" className="w-full h-screen ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <h1 className="dark:text-dark-text-heading text- text-4xl font-bold inline border-b-4 border-[#38BDF8]">
              About
            </h1>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="dark:text-dark-text-heading  text-4xl font-bold ">
              Hi. I'am Nguyen, nice to meet you. Please take a look around.
            </p>
          </div>
          <div className="sm:text-left pb-8 pl-4">
            <p className="dark:text-dark-text-heading   font-bold ">
              I am a final student majoring in Software Technology. With a
              inquisitive and hardworking personality, I look forward to working
              as a web developer at your company. I will try to complete the
              assigned tasks well, learn more professional experience and
              constantly strive to become a Professional web developer next 3
              years.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
