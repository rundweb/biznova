/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "ns":["Nunito Sans", "serif"],
        "pd":["Playfair Display", "serif"],
      }
    },
  },
  plugins: [],
}