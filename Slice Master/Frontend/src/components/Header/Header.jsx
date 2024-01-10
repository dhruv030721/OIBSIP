import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import PizzaIcon from '../../assets/wallpaper/pizzaIcon.png'
import { BsCart3 } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";



function Header() {

  const menu = [{ name: "Home", link: '/' }, { name: "Category", link: 'category' }, { name: "About Us", link: 'aboutus' }, { name: "Contact Us", link: 'contactus' },];

  const [isLogin, setisLogin] = useState(false);


  return (
    <div className='h-[8vh] fixed z-20 flex items-center bg-bg-gray justify-between w-full bg-transparent bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30  before:bg-black before:absolute before:w-full before:h-full before:opacity-40 before:-z-10 text-white '>
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
            <NavLink key={item.name} to={item.link} className={({ isActive }) => `relative hover:scale-110 transition-all hover:transition-all outline-none before:bg-orange-500 before:absolute before:w-0 hover:before:transition-all before:top-7 before:left-0 before:h-[0.1vh] hover:before:w-full ${isActive ? "before:w-full" : "before:w-0"}`}>{item.name}</NavLink>
          ))}
        </ul>
      </nav>
      <div>
        {/* cart and login  */}
        <div className='flex items-center mr-10 font-poppins font-bold'>
          <BsCart3 color='white' size={25} className='mr-5 hover:drop-shadow-orange-0.7' />
          {isLogin ? (
            <div className='flex flex-col justify-center items-center hover:drop-shadow-orange-0.7'>
              <IoIosContact size={30} />
              <Link className='text-[0.7rem]'>Dhruv Godhani</Link>
            </div>
          ) : (<Link to={'login'} class="smky-btn3 relative hover:text-black py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-orange-500 after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-white">Login</Link>)}
        </div>
      </div>
    </div>
  )
}

export default Header
