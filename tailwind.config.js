/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Support toggling dark mode manually
  theme: {
    extend: {
      colors: {
        'gym-black': '#0a0a0a',
        'gym-dark': '#141414',
        'gym-gray': '#1f1f1f',
        'gym-neon': '#00f0ff', // Neon Blue
        'gym-neon-dark': '#00b8c4',
        'gym-text': '#f4f4f5',
        'gym-text-muted': '#a1a1aa'
      },
      fontFamily: {
        sans: ['Inter', 'Cairo', 'sans-serif'], // Cairo for Arabic, Inter for English
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00f0ff, 0 0 10px #00f0ff' },
          '100%': { boxShadow: '0 0 20px #00f0ff, 0 0 30px #00f0ff' },
        }
      }
    },
  },
  plugins: [],
}
