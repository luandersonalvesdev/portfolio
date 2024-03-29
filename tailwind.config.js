/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'c-main-dark': '#111111',
        'c-secondary-dark': '#2F2F2F',
        'c-stroke-dark': '#282828',
        'c-second-text-dark': '#959595',
        'c-main-white-dark': '#EFEFEF',
        'c-main-light': '#FAFAFA',
        'c-secondary-light': '#DCDCDC',
        'c-stroke-light': '#E1E1E1',
        'c-second-text-light': '#676767',
        'c-main-black-light': '#1B1B1B',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'geist': ['Geist Sans', 'sans-serif'],
        'geist-mono': ['Geist Mono', 'sans-serif'],
      },
      scale: {
        '1025': '1.025',
        '1010': '1.010',
      }
    },
  },
  plugins: [],
}

