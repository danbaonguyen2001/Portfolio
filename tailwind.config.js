/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      ...colors,
      "primary-dark": "#0f172a",
      "dark-text-heading": "#F1F5F9",
      "dark-text": "#8A99AD",
      "light-text": "#1b2335",
      hover: "#38BDF8",
    },
  },
  plugins: [],
};
