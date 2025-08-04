// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // This line enables toggling dark mode with a class!
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}", // Add your actual paths if different
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
