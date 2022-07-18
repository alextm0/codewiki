/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        righteous: ['Righteous'],
        quicksand: ['quicksand'],
      },
      backgroundImage: theme => ({
        'hero-background': "url('/src/assets/hero.png')",
        'nav-background': "url('/src/assets/nav.png')",
      })
    }
  },
  plugins: [],
}
