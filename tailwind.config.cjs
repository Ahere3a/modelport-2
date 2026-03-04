/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "gold-soft": "#d4af37",
        "rich-black": "#050608"
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      letterSpacing: {
        wider: "0.18em"
      },
      boxShadow: {
        "soft-gold": "0 18px 45px rgba(212, 175, 55, 0.25)"
      }
    }
  },
  plugins: []
};
