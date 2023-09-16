import React, { useEffect } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation(["home"]);
  return (
    <section name="home" className="w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-4 flex  flex-col  justify-center h-full">
        <p className="text-[#38BDF8] font-semibold">{t("hi")} </p>
        <h1 className="text-4xl lg:text-7xl font-bold dark:text-dark-text-heading">
          {t("name")}
        </h1>
        <h2 className="text-4xl lg:text-7xl font-bold">{t("position")}</h2>
        <p className="py-4">{t("bio")}</p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className=" group flex items-center border-2 border-black dark:border-white rounded-md px-6 py-2 dark:text-white my-2 hover:bg-[#38BDF8] hover:text-white hover:border-[#38BDF8] dark:hover:border-[#38BDF8]">
              {t("button_name")}{" "}
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
