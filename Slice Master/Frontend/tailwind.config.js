/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-gray': '#222324'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translatey(-10px)' },
          '50%': { transform: 'translatey(0px)' },
        },
        space: {
          '0% ': { transform: 'translate(0px, 0px)', opacity: 1 },
          '50%': { transform: 'translate(10px, -30px)', opacity: 0},
          '75%' : {transform : 'translate(-10px, 30px)', opacity : 0},
          '100%' : {transform : 'translate(0px, 0px)', opacity : 1},
        },
      },
      fontFamily: {
        'parisienne': ['Parisienne'],
        'poppins': ['Poppins'],
        'kaushan': ['Kaushan Script']
      },
      animation: {
        wiggle: 'wiggle 1.5s ease-in-out infinite',
        space: 'space 0.5s ease-in-out',
      },
      backgroundImage: {
        'pizza-background': "url('./assets/wallpaper/background.png')",
        'home-pizza-background': "url('./assets/wallpaper/pizza.jpg')"
      },
      dropShadow: {
        '3xl': '0px -1px 20px rgba(249, 115, 22, 0.3)',
        'white-4xl': '10px 10px 80px rgba(255, 255, 255, 1)',
      },
    },
  },
  plugins: [],
}