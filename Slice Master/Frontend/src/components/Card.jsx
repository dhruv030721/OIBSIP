import React from 'react'
function Card({img,logo,name,description,price}) {
    return (
        <div className='flex flex-col justify-center items-center w-[20%] bg-gray-500 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 drop-shadow-white-xl shadow-2xl border-t-orange-500 border-b-orange-500 border-2 border-x-transparent text-white py-5 hover:-translate-y-3 transition-all
    '>
            {/* Img */}
            <img src={img} alt="Farm House" className='w-[50%] drop-shadow-3xl' />
            {/* Name */}
            <h1 className='text-xl font-kaushan'>{name}</h1>
            <div className='flex items-center justify-between p-5'>
                {/* CategoryLogo */}
                <h1>&#8377; {price}</h1>
                {/* Price */}
                <img src={logo} alt="" className='w-[10%]' />
            </div>
            {/* PizzaIngredients */}
            <p className='text-[0.7rem] px-4'>{description}</p>
            {/* Order button */}
            <button className='px-6 py-2.5 mt-10 text-sm border-orange-600 rounded-2xl text-orange-500 font-black bg-transparent shadow-3xl drop-shadow-3xl hover:scale-105 transition-all backdrop-filter backdrop-blur-sm before:bg-orange-500 before:absolute before:w-0  before:h-0 before:top-0 hover:text-black  before:left-0 z-0 before:-z-10 before:rounded-xl hover:before:w-full hover:before:h-full before:transition-all hover:before:transition-all border-y-2'>Add to Cart</button>
        </div>
    )
}

export default Card
