import React from 'react'
import LottieAnimation from './LottieAnimation'
import DeliveryBoy from '../assets/jsons/deliveryboy.json'

function Loading({message}) {
  return (
    <div className='min-h-screen bg-bg-gray text-orange-500 flex flex-col items-center justify-center font-poppins text-4xl'>
    <h2 className='font-bold drop-shadow-3xl'>{message}</h2>
    <LottieAnimation json={DeliveryBoy} divclassName='max-w-[30%]' />
  </div>
  )
}

export default Loading
