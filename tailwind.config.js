/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold: {
          50: '#fff9e6',
          100: '#fef0c7',
          200: '#fde08a',
          300: '#fbd44d',
          400: '#f9c524',
          500: '#DAA520',
          600: '#b78106',
          700: '#956409',
          800: '#7a510c',
          900: '#64420f',
          950: '#382204',
        },
        anthracite: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#313131',
          950: '#1a1a1a',
        }
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};