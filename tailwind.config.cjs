const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
        'mono': ['Roboto Mono', ...defaultTheme.fontFamily.mono]
      },
      colors: {
        'orange': {
          400: '#ff8500'
        }
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: false
  }
}
