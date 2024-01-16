import React from 'react'
import { Link } from 'react-router-dom';
import { FaTelegramPlane } from "react-icons/fa";
import { Input, TextArea } from '../../components'
import { useForm } from 'react-hook-form'

function ContactUs() {

  const inputStyle = `bg-transparent border-b-2 border-orange-500 outline-none`;
  const { register, handleSubmit, formState: { errors } } = useForm();

  const contactHandler = () => {

  }


  return (
    <div className='flex bg-bg-gray py-32 px-10 justify-between items-center min-h-screen'>
      {/* map */}
      <div className='w-[50%] h-96'>
        <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map" scrolling="yes" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
      </div>
      {/* contact form */}
      <div className='w-[40%] text-white font-poppins '>
        <form onSubmit={handleSubmit(contactHandler)} className='flex flex-col space-y-4 font-light'>
          <Input label="Name" className='bg-transparent border-orange-500' labelclassName='font-light' {...register("name", {
            required: true,
            pattern: /^[A-Za-z\s]+$/
          })} />
          {errors.name && <p className='text-red-500'>*Please check the name</p>}
          <Input label="Email Address" className='bg-transparent border-orange-500' labelclassName='font-light' type="email" {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          })} />
          {errors.email && <p className='text-red-500'>*Please check the email</p>}
          <TextArea className="border-orange-500 text-white " label="Message : " rows='4' cols='10' {...register("message")} />
        </form>
        <div className='relative inline-block mt-5 z-10'>
          <Link onClick={handleSubmit(contactHandler)} className="flex items-center gap-3 before:-z-10 hover:font-black hover:before:rounded-sm  before:rounded-t-full before:transition-all hover:text-black before:absolute before:bg-orange-500 before:w-full before:h-1 py-3 px-5 hover:before:h-full before:bottom-0 before:left-0 group">Send <FaTelegramPlane className='group-hover:animate-space group-hover:text-black' size={20} /></Link>
        </div>

      </div>
    </div>
  )
}

export default ContactUs
