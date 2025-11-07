/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
         screens: {
        'xs': '375px',  // DODAJ OVO za iPhone SE i slične
      },
      colors: {
        // Tamnozelena tema za HOT Pflegedienst - profesionalna i moderna
        primary: {
          50: '#e6f3e9',
          100: '#c0dfca',
          200: '#94c6a8',
          300: '#689f82',
          400: '#47805d',
          500: '#2d6943',  // Glavna tamnozelena - moderna i pouzdana
          600: '#255638',
          700: '#1d432d',  // Tamna za header i footer
          800: '#163322',
          900: '#0f2318',
        },
        // Sekundarna boja - tirkizna/teal za medicinsku sigurnost i inovaciju
        secondary: {
          50: '#e6f7f7',
          100: '#b3e5e6',
          200: '#80d3d4',
          300: '#4dc1c2',
          400: '#26afb0',
          500: '#1a9a9b',  // Tirkizna - moderna medicinska boja
          600: '#15797a',
          700: '#105859',
          800: '#0b3838',
          900: '#061717',
        },
        // Tercijarna - zlatna/topla za humanost i pažnju
        accent: {
          50: '#fef9e7',
          100: '#fcefc2',
          200: '#fae599',
          300: '#f7db6f',
          400: '#f5d04a',
          500: '#f3c623',  // Zlatna - za CTA dugmad i naglaske
          600: '#d4a81e',
          700: '#b58a19',
          800: '#966c14',
          900: '#774e0f',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
