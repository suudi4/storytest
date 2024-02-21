module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        purple: { 100: "#ffabff" },
        blue_gray: {
          50: "#ececf1",
          700: "#535457",
          800: "#444654",
          900: "#2b2c2f",
          "900_4c": "#3333334c",
          "900_02": "#333333",
          "900_01": "#343541",
        },
        gray: {
          400: "#c5c5d1",
          500: "#9a9b9f",
          900: "#202123",
          "900_99": "#20212399",
          "900_01": "#182317",
          "400_01": "#aeaeb4",
        },
        deep_purple: { 500: "#5536da", "500_19": "#5536da19" },
        blue: { A200: "#4b85dd", A200_33: "#4c86dd33" },
        red: { 400: "#dd524c", "400_19": "#dd524c19", A400_87: "#ff2d5587" },
        teal: {
          200: "#8dcdb8",
          500: "#0fa47f",
          600: "#00897b",
          "500_19": "#0fa47f19",
        },
        yellow: { 300: "#fae673", "300_19": "#fae67319" },
        black: { 900: "#000000", "900_07": "#00000007" },
        light_blue: { A700: "#007aff" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
