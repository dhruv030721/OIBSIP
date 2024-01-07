import React from 'react'
import SideBackground from '../../assets/wallpaper/wallpaper-1.jpeg'
import Background from '../../assets/wallpaper/background.png'
import PizzaIcon from '../../assets/wallpaper/pizzaIcon.png'

function Template({ formType }) {
  return (
    <div className='flex h-screen justify-between'>
      <div className='flex flex-col items-center w-[40%] before:bg-pizza-background before:absolute before:w-[40%] before:h-[100%] before:bg-no-repeat before:-z-10 space-y-7 before:opacity-15 '>
        <div className='flex py-5'>
          <h1 className='logo-text font-parisienne font-black text-6xl first-letter:text-orange-500 '>Slice&#160;</h1>
          <h1 className='logo-text font-parisienne font-black text-6xl first-letter:text-red-500 '>Master</h1>
          <img src={PizzaIcon} alt="" className='w-20 h-20 animate-wiggle drop-shadow-3xl ' />
        </div>
          <h1 className="text-center font-poppins font-extrabold text-3xl">Welcome To Back</h1>
          {formType}
      </div>
      <div className='w-[60%] h-screen'>
        {/* Photo  */}
        <img src={SideBackground} alt="" className='w-full h-full object-cover' />
      </div>
    </div>
  )
}

export default Template
