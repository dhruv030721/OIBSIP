import React from 'react'
import SideBackground from '../../assets/wallpaper/wallpaper-1.jpeg'

function Template({formType}) {
  return (
    <div className='flex h-screen justify-between'>
      <div className='flex flex-col items-center w-[40%]'>
        <div className="logo-text font-parisienne font-black text-6xl">Slice Master</div>
        <h1 className="welcome-text font-poppins font-extrabold text-2xl">Welcome To Back</h1>
        <p className="description"></p>
        {formType}
      </div>
      <div className='w-[60%] h-screen'>
        {/* Photo  */}
        <img src={SideBackground} alt="" className='object-cover w-[100%] h-[100%]'/>
      </div>
    </div>
  )
}

export default Template
