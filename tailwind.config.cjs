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
      'blue': {
        900: '#14213D',
        800: '#1B2E55',
        700: '#233A6C', 
        600: '#2A4683',
        500: '#32539A',
        400: '#395FB1',
        300: '#8BA4DA',
        200: '#D1DBF0',
        100: '#E8EDF8'
      },
      'neutral': {
        900: '#000',
        800: '#121212',
        700: '#242424', 
        600: '#373737',
        500: '#494949',
        400: '#5B5B5B',
        300: '#6D6D6D',
        200: '#EDEDED',
        100: '#FFFFFF'
      },
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