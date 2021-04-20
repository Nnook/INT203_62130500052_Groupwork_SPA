const colors = require('tailwindcss/colors')
module.exports = {
  purge: {
    content: ['./public/**/*.html', './src/**/*.vue']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sea: '#0fa9e6',
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