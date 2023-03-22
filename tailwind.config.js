const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit', 
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('~home/slide1.jpg')",
      }
    },
    screens: {
      'mb': {'max': '415px'},
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
