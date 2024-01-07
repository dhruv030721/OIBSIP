import React from 'react'
import Img from '../../assets/wallpaper/wallpaper-1.jpeg'
import { Link } from 'react-router-dom';
import { FaTelegramPlane } from "react-icons/fa";

function ContactUs() {

  const inputStyle = `bg-transparent border-b-2 border-orange-500 outline-none`;


  return (
    <div className='flex bg-bg-gray py-32 px-10 justify-between items-center'>
      {/* map */}
      <div className='w-[50%] h-96'>
        <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="yes" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
      </div>
      {/* contact form */}
      <div className='w-[40%] text-white font-poppins'>
        <form action="" className='flex flex-col space-y-4'>
          <label htmlFor="">Name :</label>
          <input type="text" className={`${inputStyle}`} />
          <label htmlFor="">Email :</label>
          <input type="email" className={`${inputStyle}`} />
          <label htmlFor="">Message :</label>
          <textarea name="" id="" cols="30" rows="10" className={`${inputStyle}`}></textarea>
        </form>
        <div className='relative inline-block mt-5 z-10'>
          <Link to={'login'} class="flex items-center gap-3 before:-z-10 hover:font-black hover:before:rounded-sm  before:rounded-t-full before:transition-all hover:text-black before:absolute before:bg-orange-500 before:w-full before:h-1 py-3 px-5 hover:before:h-full before:bottom-0 before:left-0 group">Send <FaTelegramPlane className='group-hover:animate-space group-hover:text-black' size={20} /></Link>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
