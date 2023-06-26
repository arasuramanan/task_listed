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
        gray: {
          100: "#f5f5f5",
          200: "#eaeaea",
          400: "#b0b0b0",
          500: "#999999",
          600: "#848484",
          700: "#666666",
        },
        green: { 200: "#97d79e", 600: "#34a853" },
        blue: { 700: "#346ad4", A200: "#4285f4" },
        amber: { 200: "#f6db7d", 500: "#fbbc05", "200_01": "#f6dc7d" },
        red: { 200: "#e89f9f", 500: "#eb4335", A100: "#ee8383" },
        light_green: { 300: "#9bdd7c" },
        indigo: { 400: "#6972c3" },
        black: { 900: "#000000" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        montserrat: "Montserrat",
        lato: "Lato",
        opensans: "Open Sans",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
