/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  
  theme: {
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  textOverflow: ['hover', 'focus'],
};


