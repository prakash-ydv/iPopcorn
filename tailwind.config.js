/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        popFromTop: {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "50%": { transform: "translateY(10%)", opacity: 0.8 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        popFromTop: "popFromTop 0.5s ease-out",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};