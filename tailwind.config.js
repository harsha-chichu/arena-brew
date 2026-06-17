/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#080810',
        'bg-surface': '#101020',
        'bg-card': '#151528',
        'accent-teal': '#1ABFAE',
        'accent-gold': '#C9A84C',
        'accent-silver': '#B8C5D4',
        'text-primary': '#F0EDE8',
        'text-muted': '#7A7A8C',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'cursive'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'ticker': 'ticker 30s linear infinite',
        'ticker-slow': 'ticker 45s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
