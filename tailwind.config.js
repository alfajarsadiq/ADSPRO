/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // --- ADD POPPINS HERE ---
        poppins: ['Poppins', 'sans-serif'],
        archivo: ['Archivo', 'sans-serif'],
        trusted: ['Trusted', 'sans-serif'],
        noken: ['Noken', 'sans-serif'],
        rokhald: ['Rokhald', 'sans-serif'],
        mourich: ['Mourich', 'sans-serif'],
        blackpast: ['Blackpast', 'sans-serif'],
      },
      colors: {
        'brand-gold': '#C6A664',
        'brand-lime': '#B1DC40', 
        'neu-bg': '#FCFFFC',     
        'neu-text': '#131508',   
      },
      boxShadow: {
        'neu-outset': '9px 9px 16px rgba(0,0,0,0.06), -9px -9px 16px rgba(255,255,255, 1)',
        'neu-inset': 'inset 6px 6px 10px 0 rgba(0,0,0, 0.06), inset -6px -6px 10px 0 rgba(255,255,255, 1)',
      }
    },
  },
  plugins: [],
};