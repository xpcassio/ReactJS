module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkMode: {
          light: '#525252',
          DEFAULT: '#414141',
          dark: '#313131',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
