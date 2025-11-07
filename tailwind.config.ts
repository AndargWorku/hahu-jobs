// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  // IMPORTANT: Set Tailwind to use the 'class' strategy
  darkMode: 'class', 
  
  content: [
    // ... make sure your component paths are here
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    // ...
  },
  plugins: [
    // ...
  ],
};