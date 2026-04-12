module.exports = {
  content: [
    './*.html',
    './privacy-terms/*.html'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f8f4ed',
          100: '#eee4d5',
          200: '#e2d2bb',
          700: '#8f6f57',
          900: '#231b16'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
        display: ['Cairo', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
};
