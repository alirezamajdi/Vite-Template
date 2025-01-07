/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#24D7D3",
        secondary: "#06DB9E",

        bg: "#F3F3F3",

        dark: "#3A3A3A",
      },
      boxShadow: {
        box: "0px 0px 15px 0px rgba(0, 0, 0, 0.15)",
      },
      fontFamily: {
        madeEvolveSans: ["MADE-Evolve-Sans"],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1440px",
    },
  },
  darkMode: "class",
  plugins: [],
};
