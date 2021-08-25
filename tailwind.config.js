module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#100E1D',
        'secondary': '#1E213A',
        'search': '#6E707A',
        'tempf': '#585676',
        'tempc': '#E7E7EB',
        'btn': '#3C47E9',
        'bar': '#FFEC65',

      }),
      textColor: {
        'primary': '#E7E7EB',
        'secondary': '#A09FB1',
        'third': '#88869D',
        'fourth': '#616475',
        'fifth': '#110E3C'
      },
      fontSize: {
        'xxsm': '12px',
        'xs': '14px',
        'sm': '16px',
        'base': '18px',
        'lg': '24px',
        'xl': '36px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '144px',
      },
      fontFamily: {
        display:['Raleway','sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
