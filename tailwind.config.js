/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./public/proyects.html", "./src/**/*.{html,js}",],
  theme: {
    extend: {
      width: {
        '706': '44rem',
        '540': '33rem',
        '1100': '68rem',
      },
      fontFamily: {
        grotesk: ['Space Grotesk'],
      }
    },
  },
  plugins: [],
}

