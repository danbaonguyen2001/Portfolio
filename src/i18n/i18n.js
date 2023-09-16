import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import NAVBAR_EN from "../locales/en/navbar.json";
import NAVBAR_VI from "../locales/vi/navbar.json";
import HOME_EN from "../locales/en/home.json";
import HOME_VI from "../locales/vi/home.json";
import SKILLS_EN from "../locales/en/skills.json";
import SKILLS_VI from "../locales/vi/skills.json";
import WORK_EN from "../locales/en/work.json";
import WORK_VI from "../locales/vi/work.json";
import CONTACT_EN from "../locales/en/contact.json";
import CONTACT_VI from "../locales/vi/contact.json";

export const locales = {
  en: "en",
  vi: "vi",
};

export const resources = {
  en: {
    navbar: NAVBAR_EN,
    home: HOME_EN,
    skills: SKILLS_EN,
    work: WORK_EN,
    contact: CONTACT_EN,
  },
  vi: {
    navbar: NAVBAR_VI,
    home: HOME_VI,
    skills: SKILLS_VI,
    contact: CONTACT_VI,
    work: WORK_VI,
  },
};

// eslint-disable-next-line import/no-named-as-default-member
i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  ns: ["navbar", "home", "skills", "work", "contact"],
  fallbackLng: "vi",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});
