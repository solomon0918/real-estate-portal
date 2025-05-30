/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
      colors: {
        primary: {
          DEFAULT: "#4A90E2",
          light: "#8ABDED",
          dark: "#1F5FA2"
        },
        accent: {
          cta: "#F4A261",
          urgency: "#E76F51"
        },
        background: {
          light: "#F4F4F4",
          dark: "#E0E0E0"
        },
        text: {
          primary: "#2B2D42",
          secondary: "#555B6E"
        }
      }
    },
  },
  plugins: [],
};
