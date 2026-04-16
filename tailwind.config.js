/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        sunset: {
          DEFAULT: '#FF4500',
          light: '#FF6347',
          dark: '#FF0000'
        },
      },
      animation: {
        fade: 'fade 1s ease-in-out',
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};