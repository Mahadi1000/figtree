/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      cinzel: ["Cinzel Decorative", "cursive"],
    },
    
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
