/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-primeui')],
  darkMode: ['selector', '.p-app-dark'],
}
