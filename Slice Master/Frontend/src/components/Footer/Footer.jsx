import React from 'react'
import Chef from '../../assets/wallpaper/Chef.png'
import { IoIosContact } from "react-icons/io";
import { BsTwitterX, BsMeta } from "react-icons/bs";
import { Link, NavLink } from 'react-router-dom'
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";


function Footer() {

  const menu = [{name : "Home", link : '/'},{name : "Our Menu", link : 'menu'},{name : "Contact Us", link : 'contactus'},]

  return (
    <>
      <div className='flex flex-col border-t-2 border-orange-500 rounded-ss-2xl  rounded-se-2xl '>
        <div className='flex justify-around w-full p-10 h-full rounded-ss-2xl rounded-se-2xl bg-white/5 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10
font-poppins'>
          <img src={Chef} alt="" className='w-[10%] h-full drop-shadow-3xl animate-wiggle' />
          <div className='w-[1px] max-h-full bg-gradient-to-b from-transparent via-white to-transparent'></div>
          <div className='flex flex-col text-white gap-y-2'>
            <h1 className='font-semibold  text-xl text-orange-500  '>Menu</h1>
            {menu.map((item)=>(
              <NavLink key={item.name} to={item.link} className={({isActive})=>`${isActive ? "text-orange-500" : "text-white"} `}>{item.name}</NavLink>
            ))}
          </div>
          <div className='w-[1px] max-h-full bg-gradient-to-b from-transparent via-white to-transparent'></div>
          <div className='flex flex-col text-white  gap-y-2'>
            <h1 className='font-semibold text-orange-500 text-xl border-b-2-orange-500'>Social Media</h1>
            <div className='flex gap-2 items-center  '>
              <BsTwitterX />
              <Link>Twitter</Link>
            </div>
            <div className='flex gap-2 items-center '>
              <BsMeta />
              <Link>Facbook</Link>
            </div>
          </div>
          <div className='w-[1px] max-h-full bg-gradient-to-b from-transparent via-white to-transparent'></div>
          <div className='flex flex-col justify-center items-center text-xl text-white  gap-y-2'>
            <IoIosContact size={40} className='' />
            <h1 className='font-semibold text-white'>Contact Us</h1>
            <h6 className='text-sm flex items-center gap-3'><FaPhoneVolume /> +1 123456789</h6>
            <h6 className='text-sm flex items-center gap-3'><MdOutlineMail/> manager@slicemaster.com</h6>
          </div>
        </div>
        <div className=' flex flex-col items-center w-full bg-orange-600 h-[30%] p-2 font-poppins text-white font-semibold '>
          <h1> Copyright &copy; 2024 All Reserved by Slice Master; Developed By Dhruv Godhani</h1>
        </div>
      </div>
    </>
  )
}

export default Footer
