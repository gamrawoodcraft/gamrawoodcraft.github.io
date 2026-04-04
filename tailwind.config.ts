import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: '#efe7da',
        bark: '#2f241d',
        clay: '#a0663a',
        bronze: '#bd8c5a',
        olive: '#5a5f3b'
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Work Sans"', 'sans-serif']
      },
      boxShadow: {
        soft: '0 20px 45px rgba(24, 14, 8, 0.12)'
      }
    }
  },
  plugins: []
};

export default config;
