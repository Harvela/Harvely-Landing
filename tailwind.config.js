/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Poppins', 'serif'],
      mono: ['Poppins', 'monospace'],
      heading: ['Poppins', 'sans-serif'],
    },
    colors: {
      primary: {
        100: '#FFF7F1',
        200: '#FFF1E4',
        300: '#FEE8D4',
        400: '#FFEAD6',
        DEFAULT: '#FFEAD6',
        on: '#f4f8fd',
      },
      blue: '#001344',
      red: '#FF6076',
      green: '#0E9F90',
      text: '#3E4C4A',
    },
    extend: {
      colors: {
        primary: {
          100: '#FFF7F1',
          200: '#FFF1E4',
          300: '#FEE8D4',
          400: '#FFEAD6',
          DEFAULT: '#FFEAD6',
          on: '#f4f8fd',
        },
        blue: '#001344',
        red: '#FF6076',
        green: '#0E9F90',
        text: '#3E4C4A',
      },
      lineHeight: {
        hero: '4.5rem',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
