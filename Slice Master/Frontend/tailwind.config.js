/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translatey(-10px)' },
          '50%': { transform: 'translatey(0px)' },
        }
      },
      fontFamily : {
        'parisienne' : ['Parisienne'],
        'poppins' : ['Poppins'],
      },
      animation: {
        wiggle: 'wiggle 1.5s ease-in-out infinite',
      },
      backgroundImage: {
        'pizza-background': "url('./assets/wallpaper/background.png')"
      }
    },
  },
  plugins: [],
}