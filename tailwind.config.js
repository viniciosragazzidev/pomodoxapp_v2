/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        "custom-gray": "#575664",
        dark: "#020106",
      },
    },
  },
  plugins: [],
};
