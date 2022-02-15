module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          brand: '#F6B319',
        },
        brand: {
          border: '#E0E0E0',
        }
      },
      spacing: {
        brand: {
          'modalWidth': '400px',
        }
      }
    },
  },
  plugins: [],
}
