/** @type {import('tailwindcss').Config} */

// tailwind.config.js

module.exports = {
   content: ["./App.{js,jsx,ts,tsx}", "./screen/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors:{
          'primary': '#FE724C',
          'dark': '#111719',
          'fade': '#B3B3B3',
          'white': '#FFFFFF'
          
      },
    },
    plugins: [],
  }

}