import React from 'react'
import Chef from '../../assets/wallpaper/Chef.png'
import { IoIosContact } from "react-icons/io";
import { BsTwitterX, BsMeta } from "react-icons/bs";

function Footer() {
  return (
    <>
      <div className='flex justify-between w-full p-10 bg-orange-700 font-poppins'>
        <img src={Chef} alt="" className='w-[15%]' />
        <div className='flex flex-col text-white gap-y-2'>
          <h1 className='font-semibold text-white text-xl'>Menu</h1>
          <h2 className=''>Kitchen</h2>
          <h2>Taste</h2>
          <h2>Recipes</h2>
          <h2>Blog</h2>
        </div>
        <div className= 'flex flex-col text-white  gap-y-2'>
          <h1 className='font-semibold text-white text-xl'>Social Media</h1>
          <div className='flex gap-2 items-center  '>
            <BsTwitterX />
            <h2>Twitter</h2>
          </div>
          <div className='flex gap-2 items-center '>
            <BsMeta />
            <h2>Facbook</h2>
          </div>
        </div>

        <div className='flex flex-col items-center text-xl text-white  gap-y-2'>
          <h1 className='font-semibold text-white'>Contact Us</h1>
          <IoIosContact size={40} className='' />
        </div>
      </div>
      <div className=' flex flex-col items-center w-full bg-orange-600 h-[30%] p-2 font-poppins text-white font-semibold '>
        <h1> Copyright &copy; 2024 All Reserved by Slice Master </h1>
        <h2 className='flex flex-row gap-x-2'>Developed By<h2 className='text-white'>Dhruv Godhani</h2> &  <h2 className='text-white'>Mit Monpara</h2></h2>
      </div>
    </>
  )
}

export default Footer
