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
        primary: "var(--theme-background-selected)",
        secondary: "var(--theme-background-unselected)",
      },
      colors: {
        date: "#6941C6",
        description: "#667085",
        darkTheme: "#090D1F",
        lightTheme: "#FFF",
        lightGray: "#C0C5D0",
        primary: "var(--theme-color-selected)",
        secondary: "var(--theme-color-unselected)",
      },
    },
  },
  plugins: [],
};
