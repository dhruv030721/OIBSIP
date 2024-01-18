import React from 'react';

function CartItems({ cartData }) {
    return (
        cartData.map((data) => (
            <div key={data.item.name} className='flex font-light bg-black rounded-2xl py-10 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 drop-shadow-white-xl shadow-2xl border-orange-500 border-2 my-5 text-white pt-3'>
                <div className='w-[40%] ml-5 flex items-center'>
                    <img src={data.item.img} alt="" className='drop-shadow-3xl w-36' />
                </div>
                <div className='w-[80%] justify-start ml-5 flex flex-col'>
                    <h2 className='text-center text-xl mb-5'>{data.item.name}</h2>
                    <div className='flex flex-col space-y-3 items-end pr-10'>
                        {data.item.category !== "Beverages" ? (
                            <>
                                <div className='flex space-x-2'>
                                    <p className=''>Crust :</p>
                                    <p className='border-b-2 border-white border-dashed italic'>{data.item.crust}</p>
                                </div>
                                <div className='flex space-x-2'>
                                    <p className=''>Size :</p>
                                    <p className='border-b-2 border-white border-dashed italic'>{data.item.size}</p>
                                </div>
                                <div className='flex space-x-2'>
                                    <p className=''>Topping :</p>
                                    <p className='border-b-2 border-white border-dashed italic'>{data.item.topping}</p>
                                </div>
                                <div className='flex space-x-2'>
                                    <p className=''>Quantity :</p>
                                    <p className='border-b-2 border-white border-dashed italic'>{data.quantity}</p>
                                </div>
                                <div className='flex space-x-2'>
                                    <p className=''>Price :</p>
                                    <p className='border-b-2 border-white border-dashed italic'>{data.item.totalPrice}</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='flex space-x-2'>
                                    <p className=''>Quantity :</p>
                                    <p className='border-b-2 border-white border-dashed italic'>{data.quantity}</p>
                                </div>
                                <div className='flex space-x-2'>
                                    <p className=''>Price :</p>
                                    <p className='border-b-2 border-white border-dashed italic'>{data.item.totalPrice}</p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        ))
    );
}

export default CartItems;
