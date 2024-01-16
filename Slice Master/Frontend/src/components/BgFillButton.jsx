import React from 'react'

function BgFillButton({
    btnName,
    className='',
    ...props
}) {
  return (
    <div>
        <button className={`${className} mx-auto px-6 py-2.5 mt-10 text-sm border-orange-600 rounded-2xl text-orange-500 font-black bg-transparent shadow-3xl drop-shadow-3xl hover:scale-105 transition-all backdrop-filter backdrop-blur-sm before:bg-orange-500 before:absolute before:w-0 before:h-0 before:top-0 hover:text-black before:left-0 z-0 before:-z-10 before:rounded-xl hover:before:w-full hover:before:h-full before:transition-all hover:before:transition-all border-y-2`} {...props} >{btnName}</button>
    </div>
  )
}

export default BgFillButton
