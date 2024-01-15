import React from 'react';

function Card({ img, logo, name, description, price }) {
  return (
    <div className='flex flex-col items-center justify-center bg-black rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 drop-shadow-white-xl shadow-2xl border-t-orange-500 border-b-orange-500 border-2 border-x-transparent pb-5 text-white hover:-translate-y-3 transition-all h-[500px]'>
      {/* Img */}
      <div className='w-full h-[40%] rounded-xl -z-20'>
        <img src={img} alt="Farm House" className='drop-shadow-3xl w-full h-full px-1 mix-blend-color-burn rounded-xl -z-10 object-contain' />
      </div>
      {/* Name */}
      <h1 className='text-xl text-center font-kaushan h-[10%]'>{name}</h1>
      <div className='flex items-center justify-between p-5 h-[10%]'>
        {/* CategoryLogo */}
        {logo ? (
          <>
            <h1 className='text-orange-500 inline text-lg font-bold'>&#8377; {price}</h1>
            {/* Price */}
            <img src={logo} alt="" className='w-[10%]' />
          </>
        ) : (
          <h1 className='text-orange-500 text-start inline text-lg font-bold'>&#8377; {price}</h1>
        )}
      </div>
      {/* PizzaIngredients */}
      <div className='h-[20%]'>
        <p className='text-[0.8rem] font-light px-4'>{description}</p>
      </div>
      {/* Order button */}
      <button className='mx-auto px-6 py-2.5 mt-10 text-sm h-[10%] border-orange-600 rounded-2xl text-orange-500 font-black bg-transparent shadow-3xl drop-shadow-3xl hover:scale-105 transition-all backdrop-filter backdrop-blur-sm before:bg-orange-500 before:absolute before:w-0 before:h-0 before:top-0 hover:text-black before:left-0 z-0 before:-z-10 before:rounded-xl hover:before:w-full hover:before:h-full before:transition-all hover:before:transition-all border-y-2'>Add to Cart</button>
    </div>
  );
}

export default Card;
