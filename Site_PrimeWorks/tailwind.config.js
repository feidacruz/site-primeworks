/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003366', // Deep Engineering Blue
          light: '#004080',
          dark: '#002244',
        },
        accent: '#FFD700', // Gold/Industrial Yellow
      },
    },
  },
  plugins: [],
}