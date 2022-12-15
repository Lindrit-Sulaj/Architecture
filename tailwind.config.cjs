/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '700px',
      'laptop': '1100px',
      'desktop': '1420px'
    },
    extend: {},
  },
  plugins: [],
}