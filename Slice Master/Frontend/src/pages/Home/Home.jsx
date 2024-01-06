import React from 'react';

function Home() {

  return (
    <>
      <div className='before:bg-home-pizza-background before:absolute  before:bg-cover before:opacity-60 before:bg-no-repeat w-screen h-screen after:bg-black after:w-full after:h-full after:absolute after:opacity-70 before:-z-40 after:-z-30 flex flex-col justify-center items-center text-white font-poppins
      before:left-0 after:left-0 before:top-0 after:top-0 before:w-screen before:h-screen'>
        <div className='w-[40%] '>
          <div className='w-[100%] flex'>
            <h1 className='text-7xl font-semibold font-kaushan text-orange-200'>Life&#160;</h1>
            <h2 className='font-kaushan text-6xl'>is a combination of magic and <span className='inline-block text-7xl text-orange-200'>pizza</span></h2>
          </div>
          <div>
            <h2 className='text-end mt-10 text-xl font-kaushan'> - FEDERICO FELLINI</h2>
          </div>
        </div>
        <button className='px-10 py-4 mt-10 border-orange-600 rounded-2xl text-orange-500 font-black bg-transparent shadow-3xl drop-shadow-3xl hover:scale-105 transition-all backdrop-filter backdrop-blur-sm before:bg-orange-500 before:absolute before:w-0  before:h-0 before:top-0 hover:text-black  before:left-0 z-0 before:-z-10 before:rounded-xl hover:before:w-full hover:before:h-full before:transition-all hover:before:transition-all border-y-2'>Menu</button>
      </div>
    </>
  );
}

export default Home;
