/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: '#712bda',
      secondary: '#a45deb',
      success: '#10b981'
    }
  },
  plugins: [],
}