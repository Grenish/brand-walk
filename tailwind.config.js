/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FCEFF1",
        primary: "#FF5C8D",
        accent: "#FFB3D1",
        textcol: "#000000",
      },
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
};
