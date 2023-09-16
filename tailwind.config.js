/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primaryBG": "var(--primaryBG)",
        "cardBG": "var(--cardBG)",

      },
    },
  },
  plugins: [],
}

