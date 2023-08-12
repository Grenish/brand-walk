/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        somethingGreen: "#1B998B",
        somePink: "#F8F1FF",
        somethingPink: "#DECDF5",
        dimGray: "#656176",
        danmGray: "#534D56"
      }
    },
  },
  plugins: [],
}

