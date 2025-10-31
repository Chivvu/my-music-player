/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,x}",
    "./components/**/*.{js,ts,x}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6366f1',
          dark: '#8184f7',
        },
        background: {
          light: '#ffffff',
          dark: '#111827',
        },
      },
    },
  },
  plugins: [],
};