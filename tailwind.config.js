/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui'],
        'merriweather': ['Merriweather Sans','sans-serif'],
        'blackHan':['Black Han Sans', 'sans-serif']
        


      }
    },
  },
  plugins: [],
}

