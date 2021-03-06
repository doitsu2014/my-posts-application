const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      blue: colors.lightBlue,
      pink: colors.fuchsia,
      green: colors.green
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    stroke: theme => ({
      'black': theme('colors.black'),
      'white': theme('colors.white'),
    }),
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'bg-dot-01': 'url(/bg-dot-01.jpg)',
        'bg-dot-02': 'url(/bg-dot-02.jpg)'
      },
      animation: {
        'bounce-slow': "bounce 1s infinite",
        'bounce-medium': "bounce 0.8s infinite",
        'bounce-fast': "bounce 0.6s infinite"
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding'
      } 
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
