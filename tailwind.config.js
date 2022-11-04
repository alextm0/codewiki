/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js', 'node_modules/preline/dist/*.js', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        righteous: ['Righteous'],
        quicksand: ['Quicksand'],
        dmsans: ['DM Sans'],
        montserrat: ['montserrat'],
        rubik: ['Rubik'],
        poppins: ['poppins'],
        maven: ['maven pro'],
        outfit: ['outfit'],
        ubuntu: ['ubuntu'],
        source_serif: ['Source Serif Pro'],
        nunito: ['nunito'],
        roboto: ['roboto'],
        noto: ['Noto Sans'],
        lato: ['lato'],
        comfortaa: ['comfortaa']
      },
      "colors": {
        custom: {
          DEFAULT: '#10B981',
          light: '#D1FAE5'
        },

        "purple": {
          100: '#a273ff',
          200: '#935bff',
          300: '#8344ff',
          400: '#742cff',
          500: '#6415FF',
          600: '#5a13e6',
          700: '#5011cc',
          800: '#460fb3',
          900: '#3c0d99',
        },
        "gray": {
          "lightest": "#fff",
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        "cyan": "#00e0b4",
        
        "orange": {
          "50": "#ff938d",
          "100": "#ff8983",
          "200": "#ff7f79",
          "300": "#ff756f",
          "400": "#f66b65",
          "500": "#ec615b",
          "600": "#e25751",
          "700": "#d84d47",
          "800": "#ce433d",
          "900": "#c43933"
        }
      },
    }
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require("daisyui"),
    require('preline/plugin'),
    require('tailwind-scrollbar'),
    require('flowbite/plugin'),
  ]
}
