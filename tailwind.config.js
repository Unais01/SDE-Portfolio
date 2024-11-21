module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#6E07F3", // Custom color added here
      },
      fontFamily: {
        fontSecondary: ["Item", "cursive"], // Register the custom font
        fontPrimary: ["Roboto", "sans-serif"],
        Primary: ["eurostile", "sans-serif"],
      },
    },
  },
  plugins: [],
};
