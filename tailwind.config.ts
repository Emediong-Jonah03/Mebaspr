/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#D91A1E',
        'primary-dark': '#8B0D0E',
        'neutral-gray': '#E6E7E8',
        'deep-black': '#000000',
        'off-white': '#F8F6F6',
      },
      fontFamily: {
        display: ['"Public Sans"', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '9999px',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.7s ease forwards',
        fadeIn: 'fadeIn 0.7s ease forwards',
      },
    },
  },
  plugins: [],
}
