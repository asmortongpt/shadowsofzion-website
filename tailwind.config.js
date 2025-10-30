/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'band-red': '#8B0000',
        'band-gold': '#FFD700',
        'band-dark': '#1a1a1a',
      },
      fontFamily: {
        'metal': ['Impact', 'Haettenschweiler', 'Arial Black', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
