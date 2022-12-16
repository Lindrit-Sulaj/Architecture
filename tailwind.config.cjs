/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'inter-tight': ['Inter Tight', 'sans-serif'],
      'noto-sans': ['Noto Sans', 'sans-serif']
    },
    colors: {
      'dark-blue': '#14213D',
      'yellow': '#FCA311',
      'light-gray': '#E5E5E5',
      'white': '#FFF'
    },
    screens: {
      'tablet': '700px',
      'laptop': '1100px',
      'desktop': '1420px'
    },
    extend: {},
  },
  plugins: [],
}