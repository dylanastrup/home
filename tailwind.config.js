/** @type {import('tailwindcss').Config} */
module.exports = {
  // Enables dark mode based on the 'dark' class on the HTML tag
  darkMode: 'class',
  
  // This tells Tailwind to scan these files for classes
  content: [
    './index.html',
    './main.js',
  ],
  
  theme: {
    extend: {
      // Your custom theme settings from the old inline script
      colors: { 
        primary: '#477491', 
        secondary: '#D28415', 
        surface: '#D2D2D2' 
      },
      fontFamily: { 
        sans: ['Plus Jakarta Sans','Inter','system-ui','Segoe UI','Roboto','Helvetica Neue','Arial','Noto Sans','Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji','sans-serif'] 
      },
      boxShadow: { soft: '0 4px 24px rgba(0,0,0,0.08)' },
      borderRadius: { '2xl': '1.25rem' }
    },
  },
  plugins: [],
}