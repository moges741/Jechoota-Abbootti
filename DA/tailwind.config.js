/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#5D1000',
          darker: '#3A0A00',
          gold: '#FFD700',
        }
      }
    },
  },
  plugins: [],
}
