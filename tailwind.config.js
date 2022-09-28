const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["EB Garamond", "sans-serif"],
      mono: ["Inconsolata", "mono"],
      serif: ["Arima Madurai", "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".flex-center": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      };
      addUtilities(newUtilities);
    }),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
