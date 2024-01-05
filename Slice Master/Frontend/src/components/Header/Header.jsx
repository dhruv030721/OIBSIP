import React from 'react'
import { Link } from 'react-router-dom'
import PizzaIcon from '../../assets/wallpaper/pizzaIcon.png'
import { BsCart3 } from "react-icons/bs";



function Header() {

  const menu = ["Home", "Category", "AboutUs", "ContactUs"]


  return (
    <div className='h-[8vh] fixed z-20 flex items-center justify-between w-full bg-transparent bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30  before:bg-black before:absolute before:w-full before:h-full before:opacity-40 before:-z-20 text-white '>
      <div className='flex items-center ml-5'>
        {/* Logo */}
        <h1 className='logo-text font-parisienne font-black text-3xl first-letter:text-orange-500 '>Slice&#160;</h1>
        <h1 className='logo-text font-parisienne font-black text-3xl first-letter:text-red-500 '>Master</h1>
        <img src={PizzaIcon} alt="" className='w-10 h-10 animate-wiggle drop-shadow-3xl' />
      </div>
      <nav className='flex justify-center'>
        {/* navbar */}
        <ul className='flex justify-center items-center gap-6 font-poppins '>
          {menu.map((item) => (
            <Link key={item} to={item.toLowerCase()} className='hover:scale-110 transition-all hover:transition-all outline-none'>{item}</Link>
          ))}
        </ul>
      </nav>
      <div>
        {/* cart and login  */}
        <div className='flex items-center mr-10 font-poppins font-bold'>
          <BsCart3 color='white' size={25} className='mr-5' />
          <Link to={'login'} class="smky-btn3 relative hover:text-black py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-orange-500 after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-white">Login</Link>
        </div>

      </div>
    </div>
  )
}

export default Header
