module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    aspectRatio: {
      none: 0,
      square: [1, 1],
      '16/9': [16, 9],
      '4/3': [4, 3],
    },
    extend: {
      fontFamily: {
        'noto-serif': ['Noto Serif JP', 'serif'],
      },
    },
  },
  variants: {
    aspectRatio: ['responsive'],
  },
  plugins: [require('tailwindcss-aspect-ratio')],
};
