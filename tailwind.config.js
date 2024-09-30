/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#f53838",
        primaryColorLight: "#f76868",
        secondaryColor: "#FFCC00",
        paragraphColor: "#c0c0c0",
        whiteColor: "#fff",
        blackColor: "#000",
        greenColor: "#007936",
        redColor: "#cc3433",
        darkColor: "#000",
        darkColorLight: "#171717",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "1.5rem",
      },
    },

    fontFamily: {
      oswald: ["Oswald", "snas-serif"],
      dmsans: ["DM Sans", "sans-serif"],
      rubik: ["Rubik", "sans-serif"],
    },
  },
  plugins: [],
};
