/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#575664",
        dark: "#020106",
      },
    },
  },
  plugins: [],
};
