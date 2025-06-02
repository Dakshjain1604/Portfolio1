/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:{
          500:"#2D3748",
          200:"#e0eafc",
          300:"#cfdef3",
        },
        orange:{
          500:"#ED8936",
        },
        gray:{
          300:"#1A202C",
        }
      },
      cursor: {
        fancy: 'url("/icons8-cursor-50.png"), auto',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        dancing: ['Dancing Script', 'cursive'],
        limelight: ['Limelight', 'cursive'],
        tagesschrift: ['Tagesschrift', 'cursive'],
        tektur: ['Tektur', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

