/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { manrope: "Manrope", markoone: "Marko One" },
      boxShadow: { bs: "0px 30px  30px 0px #91aebb33" },
    },
    fontFamily: {
      cinzel: ["Cinzel", "cursive"],
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui"), require("@tailwindcss/forms")],
};
