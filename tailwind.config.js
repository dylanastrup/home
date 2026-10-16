/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,html}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#477491',
          50: '#f2f7fa',
          100: '#e1edf3',
          200: '#c7dee9',
          300: '#a1c7db',
          400: '#75abc9',
          500: '#477491',
          600: '#3a6681',
          700: '#32546c',
          800: '#2c475b',
          900: '#283c4d',
        },
        secondary: '#D28415',
        surface: {
          light: '#f8fafc',
          dark: '#121212',
          cardDark: '#1a1a1a',
        },
      },
      fontFamily: {
        sans: [
          'Plus Jakarta Sans',
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
      },
      boxShadow: {
        soft: '0 4px 24px rgba(0, 0, 0, 0.06)',
        'soft-dark': '0 4px 24px rgba(0, 0, 0, 0.35)',
        glow: '0 0 20px rgba(71, 116, 145, 0.25)',
      },
      borderRadius: {
        '2xl': '1.25rem',
      },
    },
  },
  plugins: [],
};