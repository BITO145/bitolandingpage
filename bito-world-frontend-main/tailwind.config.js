/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html',
  ],
  theme: {
    extend: {
      keyframes: {
        autoScroll: {
          '0%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-20%)' },
          '40%': { transform: 'translateX(-40%)' },
          '60%': { transform: 'translateX(-60%)' },
          '80%': { transform: 'translateX(-80%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        autoScroll: 'autoScroll 25s linear infinite',
      },
    },
  },
  plugins: [],
}
