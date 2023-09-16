import React from "react";
import { data } from "../constants/constants";
import { useTranslation } from "react-i18next";

const Work = () => {
  // projects file
  const project = data;
  //setProject(data);

  const { t } = useTranslation(["work"]);
  return (
    <div name="work" className="w-full md:h-screen ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-6">
          <p className="dark:text-dark-text-heading text- text-4xl font-bold inline border-b-4 border-[#38BDF8]">
            {t("title")}
          </p>
          <p className="py-4"># {t("detail")}</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div  "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 duration-500 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg cursor-pointer"
                    >
                      {t("code")}
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={item.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg cursor-pointer"
                    >
                      {t("live")}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
