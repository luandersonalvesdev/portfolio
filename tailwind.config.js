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
        'main-dark': '#111111',
        'secondary-dark': '#2F2F2F',
        'stroke-dark': '#282828',
        'second-text-dark': '#959595',
        'main-white-dark': '#EFEFEF',
        'main-light': '#FAFAFA',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      scale: {
        '1025': '1.025',
        '1010': '1.010',
      }
    },
  },
  plugins: [],
}

