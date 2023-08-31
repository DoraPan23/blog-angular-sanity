/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundColor: {
        darkTheme: "#090D1F",
        lightTheme: "#FFF",
        tag: "#F9F5FF",
      },
      colors: {
        date: "#6941C6",
        description: "#667085",
      },
    },
  },
  plugins: [],
};
