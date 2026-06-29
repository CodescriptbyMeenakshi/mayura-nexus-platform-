/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A4D3C',
          light: '#0D5D49',
          dark: '#073529',
        },
        accent: {
          DEFAULT: '#C5A880',
          light: '#D8BF9D',
          dark: '#A4855D',
        },
        brand: {
          cream: '#FDFBF7',
          darkBg: '#0B0F19',
          darkCard: '#151C2C',
          darkBorder: '#1E293B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'ticker': 'ticker 30s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
};

