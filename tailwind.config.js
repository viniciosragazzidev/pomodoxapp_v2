/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      colors: {
        "custom-gray": "#575664",
        dark: "#020106",
        "custom-purple": "#6773e7",
        "custom-purple-hover": "#4334c7",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
