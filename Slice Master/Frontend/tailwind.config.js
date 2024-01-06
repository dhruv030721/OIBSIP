/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'bg-gray' : '#222324'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translatey(-10px)' },
          '50%': { transform: 'translatey(0px)' },
        }
      },
      fontFamily : {
        'parisienne' : ['Parisienne'],
        'poppins' : ['Poppins'],
        'kaushan' : ['Kaushan Script']
      },
      animation: {
        wiggle: 'wiggle 1.5s ease-in-out infinite',
      },
      backgroundImage: {
        'pizza-background': "url('./assets/wallpaper/background.png')",
        'home-pizza-background': "url('./assets/wallpaper/pizza.jpg')"
      },
      dropShadow: {
        '3xl': '0px -1px 20px rgba(249, 115, 22, 0.3)',
        'white-3xl': '0px 1px 10px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}