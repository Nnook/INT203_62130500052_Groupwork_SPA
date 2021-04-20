const colors = require('tailwindcss/colors')
module.exports = {
  purge: {
    content: ['./public/**/*.html', './src/**/*.vue']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sea: '#63c5da',
        fuchsia: colors.fuchsia,
        salmon: '#F38375'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}