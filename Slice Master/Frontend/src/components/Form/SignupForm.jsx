import React from 'react'
import { FcGoogle } from "react-icons/fc";

function SignupForm() {
  return (
    <div className='font-poppins py-10 w-[100%] overflow-y-auto flex flex-col justify-center items-center'>
      <form action="" className='flex flex-col  font-bold w-[60%]'>
        <label htmlFor="name" className='mt-8'>Name</label>
        <input type="text" name="name" id="name" className='outline-none border-b-2 border-black text-sm ' />
        <label htmlFor="email" className='mt-8'>Email Address</label>
        <input type="email" name="email" id="email" className='outline-none border-b-2 border-black text-sm ' />
        <label htmlFor="password" className='mt-8'>Password</label>
        <input type="password" name="password" id="password" className='outline-none border-b-2 border-black text-sm ' />
        <label htmlFor="confirmpassword" className='mt-8'>Confirm Password</label>
        <input type="password" name="confirmpasswod" id="confirmpassword" className='outline-none border-b-2 border-black text-sm ' />
        <label htmlFor="phonenumber" className='mt-8'>Phone Number</label>
        <input type="text" name="phonenumber" id="phonenumber" className='outline-none border-b-2 border-black text-sm ' />
      </form>

      <div className='flex flex-col items-center justify-around w-[60%] space-y-5 mt-10'>
        <button className="bg-orange-500 font-black  text-white border border-red-500 border-b-4 w-[100%] overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
          <span className="bg-rose-400 shadow-rose-400 absolute -top-[150%] left-0 inline-flex  rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          Signup &rarr;
        </button>
        <h1 className='text-center font-black border-b-2 border-black inline-block'>OR</h1>
        <div className='flex border-2 rounded-lg bg-gray-100 shadow-2xl w-[100%] justify-center items-center hover:bg-gray-300 hover:transition-all hover:border-black transition-all'>
          <FcGoogle size={30} />
          <button className='font-black ml-5 h-10 '>Signup with Google</button>
        </div>
      </div>
    </div>
  )
}

export default SignupForm
