/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': 'rgb(255, 255, 255)',
        'primaryText': 'rgb(1, 1, 1)',
        'secondaryText': 'rgb(104, 102, 102)',
        'secondaryBacground': 'rgb(220, 215, 215)',
        'border': 'rgb(117, 116, 116)',
        'green': 'rgb(0, 128, 0)',
        'lightGreen': 'rgb(220, 253, 220)',
        'red': 'rgb(255, 99, 71)',
        'blue': 'rgb(40, 70, 219)',
        'lightBlue': 'rgb(224, 255, 255)',
        'darkBlue': 'rgb(84, 243, 243)',
        'deepBlue': 'rgb(16, 16, 144)',
        'chestnut': 'rgb(205, 92, 92)',
        'lavender': 'rgb(255, 240, 245)',
          },
      fontFamily: {
        sans: ['Comic Sans MS', 'sans-serif'],
      },
      maxWidth: {
        'calc-vw-48': 'calc(100vw - 48px)',
      },
      maxHeight: {
        'calc-vh-24': 'calc(100vh - 24px)',
      },
      gridTemplateColumns: {
        'gallery-template': 'repeat(auto-fill, minmax(320px, 1fr))'
      }
    },
  },
  plugins: [],
}

