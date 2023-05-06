/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#BFA37C",
        base1: "#0C1315",
        base2: "#141a1c",
        muted: "#A6A699"
      }
    },
  },
  plugins: [],
}