/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: ['Saira', 'sans-serif'],
      backgroundColor: {
        icecream: '#DEDEDE'
      }
    }
  },
  plugins: []
}
