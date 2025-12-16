/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    borderRadius: {
      none: '0px',
      sm: '0.125rem',    // 2px
      DEFAULT: '0.25rem', // 4px
      md: '0.25rem',     // 4px (toned down from 6px)
      lg: '0.375rem',    // 6px (toned down from 8px)
      xl: '0.5rem',      // 8px (toned down from 12px)
      '2xl': '0.75rem',  // 12px (toned down from 16px)
      '3xl': '1rem',     // 16px (toned down from 24px)
      full: '9999px',    // circles
    },
    extend: {
      colors: {
        primary: {
          50: '#f6f7f3',
          100: '#e8ebe0',
          200: '#d1d7c4',
          300: '#b5be9f',
          400: '#94a079',
          500: '#758a5a',
          600: '#5f7048',
          700: '#4a5638',
          800: '#373f2a',
          900: '#252b1d',
        },
      },
      fontFamily: {
        sans: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
