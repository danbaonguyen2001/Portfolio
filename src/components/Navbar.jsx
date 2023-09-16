import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { FaGithub, FaFacebook, FaYoutube } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
import VietNam from "../assets/vietnam.png";
import England from "../assets/united-kingdom.png";
import { useTranslation } from "react-i18next";
import { locales } from "../i18n/i18n";

const Navbar = () => {
  const [theme, setTheme] = useState("null");
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const handleThemeSwitchMobile = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setNav(!nav);
  };

  const [nav, setNav] = useState(false);
  const openNavMobile = () => {
    setNav(!nav);
  };

  //Handle language
  const { i18n } = useTranslation();
  const currentLanguage = locales[i18n.language];
  const changeLanguage = () => {
    const language = currentLanguage === "vi" ? "en" : "vi";
    console.log(language);
    i18n.changeLanguage(language);
  };
  const changeLanguageMobile = () => {
    const language = currentLanguage === "vi" ? "en" : "vi";
    i18n.changeLanguage(language);
    setNav(!nav);
  };
  const { t } = useTranslation(["navbar"]);
  console.log(currentLanguage);
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 px-4 bg-white dark:bg-primary-dark  flex justify-between items-center h-16 border-b-[1px] border-b-primary-dark dark:border-b-slate-600 text-light-text dark:text-dark-text-heading z-10 ">
        <Link to="home" smooth={true} duration={500}>
          <figure className="w-10 h-10 border rounded-full ">
            <img
              className="rounded-full ring-2 ring-slate-600"
              src={logo}
              alt="nguyendan"
            />
          </figure>
        </Link>
        <ul className="hidden md:flex gap-4 font-semibold ">
          <li className="hover:text-hover cursor-pointer">
            <Link to="home" smooth={true} duration={500}>
              {t("nav1")}
            </Link>
          </li>
          {/* <li className="hover:text-hover cursor-pointer">
            <Link to="about" smooth={true} duration={500}>
              {t("nav2")}
            </Link>
          </li> */}
          <li className="hover:text-hover cursor-pointer">
            <Link to="skills" smooth={true} duration={500}>
              {t("nav3")}
            </Link>
          </li>
          <li className="hover:text-hover cursor-pointer">
            <Link to="work" smooth={true} duration={500}>
              {t("nav4")}
            </Link>
          </li>
          <li className="hover:text-hover cursor-pointer">
            <Link to="contact" smooth={true} duration={500}>
              {t("nav5")}
            </Link>
          </li>
          <li className="text-hover">
            {" "}
            <button onClick={handleThemeSwitch}>
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              )}
            </button>
          </li>
          <li className="relative group" onClick={() => changeLanguage()}>
            {currentLanguage === "en" ? (
              <img
                src={VietNam}
                alt=""
                srcset=""
                className="w-6 cursor-pointer"
              />
            ) : (
              <img
                src={England}
                alt=""
                srcset=""
                className="w-6 cursor-pointer"
              />
            )}
            <span className="absolute hidden group-hover:block  bottom-[-16px] right-0 left-0">
              {currentLanguage === "en" ? "VN" : "EN"}
            </span>
          </li>
        </ul>

        {/* Mobile */}
        <div
          className="md:hidden z-30 text-light-text dark:text-dark-text-heading"
          onClick={openNavMobile}
        >
          {nav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          )}
        </div>
        <ul
          className={
            !nav
              ? "hidden"
              : " absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center gap-4 font-semibold  bg-white dark:bg-primary-dark z-20"
          }
        >
          <li className="hover:text-hover cursor-pointer">
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={openNavMobile}
            >
              {t("nav1")}
            </Link>
          </li>
          {/* <li className="hover:text-hover cursor-pointer">
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={openNavMobile}
            >
              {t("nav2")}
            </Link>
          </li> */}
          <li className="hover:text-hover cursor-pointer">
            <Link
              to="skills"
              smooth={true}
              duration={500}
              offset={-100}
              onClick={openNavMobile}
            >
              {t("nav3")}
            </Link>
          </li>
          <li className="hover:text-hover cursor-pointer">
            <Link
              to="work"
              smooth={true}
              duration={500}
              offset={-100}
              onClick={openNavMobile}
            >
              {t("nav4")}
            </Link>
          </li>
          <li className="hover:text-hover cursor-pointer">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={openNavMobile}
            >
              {t("nav5")}
            </Link>
          </li>
          <li className="text-hover">
            {" "}
            <button onClick={handleThemeSwitchMobile}>
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              )}
            </button>
          </li>
          <li className="relative group" onClick={() => changeLanguageMobile()}>
            {currentLanguage === "en" ? (
              <img
                src={VietNam}
                alt=""
                srcset=""
                className="w-6 cursor-pointer"
              />
            ) : (
              <img
                src={England}
                alt=""
                srcset=""
                className="w-6 cursor-pointer"
              />
            )}
            <span className="absolute hidden group-hover:block  bottom-[-16px] right-0 left-0">
              {currentLanguage === "en" ? "VN" : "EN"}
            </span>
          </li>
        </ul>
      </nav>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 px-4">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.facebook.com/profile.php?id=100014233354327"
              target="noreferrer"
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] px-4">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/danbaonguyen2001"
              target="noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] px-4">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:danbaonguyen2001@gmail.com"
              target="noreferrer"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-800 px-4">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.youtube.com/channel/UCXbo9z_KfX1wYYSamN8S27Q"
              target="noreferrer"
            >
              Youtube <FaYoutube size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
