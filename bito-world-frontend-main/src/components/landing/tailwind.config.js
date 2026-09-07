/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/Components/MembershipLanding/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-brown': '#b27f49',
        'brand-brown-dark': '#a3703f',
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // Disable Tailwind's CSS reset to avoid conflicts with Bootstrap
  }
}
