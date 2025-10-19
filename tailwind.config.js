/** @type {import('tailwindcss').Config} */
module.exports = {
  // Enables dark mode based on the 'dark' class on the HTML tag
  darkMode: 'class',
  
  // This tells Tailwind to scan these files for classes
  content: [
    './index.html',
    './main.js',
  ],

  // NEW: Safelist to prevent critical classes from being purged
  safelist: [
    // For the status badges
    'badge-live',
    'badge-building',
    'badge-offline',
    'dot-live',
    'dot-building',
    'dot-offline',
    // For the main name heading size
    'text-5xl',
    // For the vertical spacing of the name
    'mt-12',
    // For the project card grid layout
    'grid',
    'grid-cols-1',
    'md:grid-cols-2',
    'gap-4',
    'gap-5',
    'gap-6'
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