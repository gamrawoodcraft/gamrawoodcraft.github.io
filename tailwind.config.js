module.exports = {
  content: [
    './*.html',
    './privacy-terms/*.html'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#e4d7cd',
          100: '#d2c1b3',
          200: '#b8a28e',
          700: '#96806c',
          900: '#76614f'
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
