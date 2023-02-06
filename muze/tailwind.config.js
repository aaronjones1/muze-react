/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,js,tsx,jsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width',
      },
    },
  },
  plugins: [],
};

