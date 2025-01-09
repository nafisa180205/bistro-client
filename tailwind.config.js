/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "featured" : "url('../assets/home/featured.jpg')"

      }
    },
  },
  plugins: [require('daisyui'),],
}

