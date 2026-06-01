/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        blackDeep: '#0A0A0A',
        emerald: '#00C853',
        gold: '#D4AF37'
      }
    }
  },
  plugins: []
};
