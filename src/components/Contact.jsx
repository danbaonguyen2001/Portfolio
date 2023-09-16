import React from "react";
import { BsFillSendCheckFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation(["contact"]);
  return (
    <section
      name="contact"
      className="w-full h-screen  flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/05bcc783-f285-4f74-a705-1e727f757b83"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline dark:text-dark-text-heading border-b-4 border-[#38BDF8] ">
            {t("title")}
          </p>
          <p className=" py-4"># {t("detail")}</p>
        </div>
        <input
          className=" rounded-md p-2 dark:text-black border-2 border-primary-dark dark:border-0"
          type="text"
          placeholder={t("pl-name")}
          name="name"
          required
        />
        <input
          className="my-4 p-2  rounded-md dark:text-black border-2 border-primary-dark dark:border-0"
          type="email"
          placeholder={t("pl-email")}
          name="email"
          required
        />
        <textarea
          className=" rounded-md p-2 dark:text-black border-2 border-primary-dark dark:border-0"
          name="message"
          rows="10"
          placeholder={t("pl-mess")}
          required
        ></textarea>
        <div className="flex items-center justify-center mt-2">
          <button className="group flex items-center border-2 border-black dark:border-white rounded-md px-6 py-2 dark:text-white my-2 hover:bg-[#38BDF8] hover:text-white hover:border-[#38BDF8] dark:hover:border-[#38BDF8]">
            {t("button-name")}
            <span className="group-hover:rotate-45 duration-300 ml-2">
              <BsFillSendCheckFill size={24} />
            </span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
