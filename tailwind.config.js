/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      '9vw': [
        '9vw',
        {
          lineHeight: '12vw',
          fontWeight: 400,
        },
      ],
    },
    extend: {
      fontFamily: {
        times: ['Times New Roman, Times, serif'],
      },
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
        55: '12vw',
      },
      zIndex: {
        99: '99',
      },
      padding: {
        '8vw': '8vw',
      },
    },
  },
  plugins: [],
};
