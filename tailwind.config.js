const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
        Bricolage_Grotesque: ["Bricolage Grotesque", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#EBEDED",
        },
        activeBorder: "rgba(165, 215, 242, 0.45)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "2rem",
        },
      },
      screens: {
        "2xl": "1440px",
        "3xl": "1740px",
      },
      backgroundImage: {
        custom: 'url("/src/assets/svg/hero.svg")',
        split_screen: 'url("/src/assets/svg/new-split-img.svg")',
      },
      backgroundColor: {
        backdrop: "rgba(5, 22, 31, 0.75)",
        wallet: "rgba(86, 139, 168, 0.20)",
      },
      boxShadow: {
        customShadow: "0px 1.334px 6.672px 0px rgba(25, 92, 121, 0.08)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        ".h-app": {
          height: "100vh",
          height: "100dvh",
        },
        ".min-h-app": {
          "min-height": "100vh",
          "min-height": "100dvh",
        },
      });
    }),
  ],
};
