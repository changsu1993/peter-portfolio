/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-grey': '#909096',
        'dark-grey': '#181818',
        'light-teal': '#08FDD8',
        'light-pink': '#fd2155',
      },
      lineHeight: {
        11: '3rem',
        12: '3.5rem',
        13: '4rem',
        14: '4.5rem',
        15: '5rem',
      },
    },
  },
  plugins: [],
};
