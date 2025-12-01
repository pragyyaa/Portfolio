/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#7c3aed',
        accent: '#00f5a0'
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: []
}
