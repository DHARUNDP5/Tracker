/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/*.{html,js}"
    // "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xl: { min: "1025px", max: "1251px" },

      md: { min: "767px", max: "1025px" },

      sl: { min: "479px", max: "767px" },

      sm: { min: "320px", max: "479px" },
    },

    extend: {},
  },
  plugins: [],
}
