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
      },
      colors:{
        // blue-500
        "primary": "#3b82f6", 
        // blue-600
        "secondary": "#2563eb",
        // neutral-800
        "font-primary": "#262626",
        // white
        "third" : "#FFFFFF"
      },
      backgroundImage:{
        "home":"url('/src/assets/image/bg-home.jpg')"
      }
    },
  },
  plugins: [],
}