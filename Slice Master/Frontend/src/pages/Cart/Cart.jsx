import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Loading } from '../../components'
import { GiShoppingCart } from "react-icons/gi";
import CartCard from './CartCard';
import Invoice from './Invoice';
import { useNavigate } from 'react-router-dom';


function Cart() {

  const cartData = useSelector((state) => state.cart.cartItem)
  const userData = useSelector((state) => state.auth.userData)
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      navigate('/login');
    }
  }, [userData, navigate]);

  if (!userData) {
    return null;
  }


  if (cartData.length == 0) {
    return (
      <Loading message="No items in cart!"/>
    )
  }

  return (
    <div className='min-h-screen before:bg-pizza-background before:h-[100%] before:w-full before:fixed before:opacity-20 pt-[10vh] font-poppins flex pb-5 bg-bg-gray '>
      <div className='z-10 flex'>
        <div className='w-[30%] flex flex-col ml-5 '>
          <div className='flex items-center justify-center space-x-3'>
            <h1 className='text-white font-bold drop-shadow-3xl text-3xl font-poppins text-center'>Cart Items</h1>
            <GiShoppingCart color='white' size={40} />
          </div>
          <div className='w-full mt-3 h-[0.1px] bg-orange-500'></div>
          {
            cartData.map((data) => (
              <CartCard key={data.item.name} name={data.item.name} crust={data.item.crust} topping={data.item.topping} size={data.item.size} category={data.item.category}
                img={data.item.img} quantity={data.quantity} price={data.item.price}
              />
            ))
          }
        </div>
        <div className='min-h-screen w-0.5 bg-orange-500 mx-5 rounded-full'></div>
        <div className='min-h-screen w-[70%]'>
          <Invoice name={userData.name} email={userData.email} contactNumber={userData.contactNumber} cartData={cartData} />
        </div>
      </div>
    </div>
  )
}

export default Cart
