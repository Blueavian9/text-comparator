/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Example custom color
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
