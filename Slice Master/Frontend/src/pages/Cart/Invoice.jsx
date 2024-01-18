import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Invoice() {

  const userData = useSelector((state) => state.auth.userData)
  const cartData = useSelector((state) => state.cart.cartItem)


  return (
    <div className='w-full text-white'>
      <section className='px-5'>
        <h2 className='text-white font-bold drop-shadow-3xl text-3xl font-poppins text-center'>Invoice</h2>
        <div className='w-full mt-3 h-[0.1px] bg-orange-500'></div>
      </section>
      <section className='mt-10 ml-5'>
        {/* User Details */}
        <div className='flex flex-col space-y-5'>
          <div className='flex space-x-2'>
            <p className=''>OrderId : </p>
            <p className='border-b-2 border-white border-dashed italic'>#123456</p>
          </div>
          <div className='flex space-x-2'>
            <p className=''>Name : </p>
            <p className='border-b-2 border-white border-dashed italic'>{userData.name}</p>
          </div>
          <div className='flex space-x-2'>
            <p className=''>Email : </p>
            <p className='border-b-2 border-white border-dashed italic'>{userData.email}</p>
          </div>
          <div className='flex space-x-2'>
            <p className=''>Contact : </p>
            <p className='border-b-2 border-white border-dashed italic'>{userData.contactNumber}</p>
          </div>
        </div>
        {/* Item Table */}
        <div className='mt-10 mx-10'>
          <table className='w-full table-fixed text-center'>
            <tr className='border-b-2 border-dashed'>
              <th className='py-4'>Item</th>
              <th className='py-4'>Price</th>
              <th className='py-4'>Quantity</th>
              <th className='py-4'>Total</th>
            </tr>
            {
              cartData.map((item) => (
                <tr key={item.item.name}>
                  <td className='pb-2 pt-3'>{item.item.name}</td>
                  <td>{item.item.totalPrice}</td>
                  <td>{item.quantity}</td>
                  <td>{item.item.totalPrice}</td>
                </tr>
              ))
            }
          </table>
        </div>
      </section>
    </div>
  )
}

export default Invoice
