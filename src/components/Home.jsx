import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section name="home" className="w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-4 flex  flex-col  justify-center h-full">
        <p className="text-[#38BDF8] font-semibold">Hi, my full name is </p>
        <h1 className="text-4xl lg:text-7xl font-bold dark:text-dark-text-heading">
          Dan Bao Nguyen
        </h1>
        <h2 className="text-4xl lg:text-7xl font-bold">
          I'am a Web Developer.
        </h2>
        <p className="py-4">
          I am a final student majoring in Software Technology. With a
          inquisitive and hardworking personality, I look forward to working as
          a web developer at your company. I will try to complete the assigned
          tasks well, learn more professional experience and constantly strive
          to become a Professional web developer next 3 years.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className=" group flex items-center border-2 border-black dark:border-white rounded-md px-6 py-2 dark:text-white my-2 hover:bg-[#38BDF8] hover:text-white hover:border-[#38BDF8] dark:hover:border-[#38BDF8]">
              View Work{" "}
              <span className="group-hover:rotate-90 duration-300">
                <BsArrowRightShort size={24} />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
