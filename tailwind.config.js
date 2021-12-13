module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        plum: "#801538",
        teal: "#0B7978",
        orange: "#F37337",
        gray: "#646464",
        darkGray: "#333333",
        lightGray: "#F9FAFB",
      },
      fontFamily: {
        sans: ["Roboto"],
      },
    },
  },

  plugins: [],
};
