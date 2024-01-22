import React from 'react'

function DetailCard({value}) {
    return (
        <div className='h-20  rounded-lg before:rounded-lg flex items-center  bg-bg-gray justify-center w-full bg-transparent bg-clip-padding backdrop-filter backdrop-blur-sm before:bg-black before:absolute before:w-full before:h-full border-[0.5px] border-orange-500 before:opacity-40 before:-z-10 text-white'>
            <h1>{value}</h1>
        </div>
    )
}

export default DetailCard
