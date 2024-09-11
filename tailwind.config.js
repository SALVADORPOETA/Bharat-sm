/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        saffron: '#FF9933', // Saffron Orange
        white: '#FFFFFF', // White
        green: '#138808', // India Green
        chakraBlue: '#0033A0', // Ashoka Chakra Blue
        deepRed: '#D32F2F', // Deep Red
        gold: '#FFD700', // Gold
      },
      fontFamily: {
        tiro: ['var(--font-tiro-devanagari-hindi)', 'serif'],
      },
    },
  },
  plugins: [],
}
