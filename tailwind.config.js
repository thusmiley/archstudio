/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#1B1D23",
        darkGrey: "#60636D",
        mediumGrey: "#7D828F",
        lightGrey: "#C8CCD8",
        veryLightGrey: "#EEEFF4",
        red: "#DF5656",
      },
    },
    fontFamily: {
      spartan: ["League Spartan", "sans serif"],
    },
  },
  plugins: [],
};
