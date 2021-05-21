// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.tsx', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class',
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
      },
      backgroundColor: (theme) => ({
        ...theme('colors'),
        primary: theme('colors.gray.100'),
        secondary: theme('colors.cyan.200'),
        tertiary: theme('colors.gray.700'),
      }),
      textColor: (theme) => ({
        primary: theme('colors.gray.900'),
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
