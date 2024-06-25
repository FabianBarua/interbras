/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        interbrasGreen: {
          50: '#f2fbf2',
          100: '#e1f7e1',
          200: '#c3efc5',
          300: '#95e098',
          400: '#5fc965',
          500: '#36a53c',
          600: '#2a8f2f',
          700: '#247129',
          800: '#215a25',
          900: '#1d4a21',
          950: '#0b280e'
        },

        interbrasGray: '#3F4545'
      },
      fontFamily: {
        interbras: ['Inter', 'apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
}
