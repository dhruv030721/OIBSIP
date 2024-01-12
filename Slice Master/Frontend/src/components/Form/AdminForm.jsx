import React from 'react'
import {Input} from '../index'

function AdminForm() {
  return (
    <div className='font-poppins py-10 w-[100%] overflow-y-auto flex flex-col justify-center items-center'>
      <form action="" className='flex flex-col gap-8 font-bold w-[60%]'>
        <Input label = "Email Address" type="email"/>
        <Input label = "Password" type="password"/>
      </form>

      <div className='flex flex-col items-center justify-around w-[60%] space-y-5 mt-10'>
        <button className="bg-orange-500 font-black  text-white border border-red-500 border-b-4 w-[100%] overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
          <span className="bg-rose-400 shadow-rose-400 absolute -top-[150%] left-0 inline-flex  rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          Login &rarr;
        </button>
      </div>
    </div>
  )
}

export default AdminForm
