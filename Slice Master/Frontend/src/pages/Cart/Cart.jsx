import React from 'react'
import { useSelector } from 'react-redux'
import DeliveryBoy from '../../assets/jsons/deliveryboy.json'
import { LottieAnimation } from '../../components'
import { CiShoppingCart } from "react-icons/ci";
import CartItems from './CartItems';


function Cart() {

  const cartData = useSelector((state) => state.cart.cartItem)

  if (cartData.length == 0) {
    return (
      <div className='min-h-screen bg-bg-gray text-orange-500 flex flex-col items-center justify-center font-poppins text-4xl'>
        <h2 className='font-bold drop-shadow-3xl'>Not Item in Cart!</h2>
        <LottieAnimation json={DeliveryBoy} divclassName='max-w-[30%]' />
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-bg-gray before:bg-pizza-background before:h-[100%] before:w-full before:fixed before:opacity-20 pt-[10vh] font-poppins flex pb-5'>
      <div className='w-[30%] flex flex-col ml-5'>
        <div className='flex items-center justify-center space-x-3'>
          <h1 className='text-white font-bold drop-shadow-3xl text-3xl font-poppins text-center'>Cart Items</h1>
          <CiShoppingCart color='white' size={40}/>
        </div>
        <div className='w-full mt-3 h-[0.1px] bg-orange-500'></div>
        <CartItems cartData={cartData} />
         </div>
      <div className='min-h-screen w-0.5 bg-orange-500 mx-5 rounded-full'></div>
      <div>

      </div>
    </div>
  )
}

export default Cart
