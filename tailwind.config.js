/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ED7138',
        secondary: '#7B72FE',
        'basic-black': '#0F1214'
      },
    },
  },
  plugins: [],
}
