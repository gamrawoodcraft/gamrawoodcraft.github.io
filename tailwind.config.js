/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./css/*.css",
    "./js/*.js"
  ],
  theme: {
    extend: {
      colors: {
        // Light theme
        'primary-light': '#56342A',
        'accent-light': '#B68E65',
        'background-light': '#D7BA89',
        'secondary-light': '#986B41',
        
        // Dark theme
        'primary-dark': '#D7BA89',
        'accent-dark': '#B68E65',
        'background-dark': '#56342A',
        'secondary-dark': '#986B41',
        
        // Current theme (dynamic)
        primary: 'var(--primary)',
        accent: 'var(--accent)',
        background: 'var(--background)',
        secondary: 'var(--litteltitle)',
      },
      fontFamily: {
        'tajawal': ['Tajawal', 'sans-serif'],
        'amiri': ['Amiri', 'serif'],
      },
    },
  },
  plugins: [],
}
