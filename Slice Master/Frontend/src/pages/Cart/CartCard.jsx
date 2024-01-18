import React from 'react';
import { useDispatch } from 'react-redux';
import { removeCartItem } from '../../store/cartSlice'; 
import toast from 'react-hot-toast';
import { FaTrashAlt } from "react-icons/fa";


function CartCard({ name, img, category, crust, size, topping, quantity, price }) {

    const dispatch = useDispatch();

    const removeItem = () => {
        
        dispatch(removeCartItem(name))
        toast.success("Item removed!",{
            position: "bottom-right"
        })

    }



    return (
            <div className='flex font-light bg-black rounded-2xl py-10 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 drop-shadow-white-xl shadow-2xl border-orange-500 border-2 my-5 text-white pt-3'>
                <div className='w-[40%] ml-5 space-y-5 flex flex-col items-center justify-center'>
                    <img src={img} alt="" className='drop-shadow-3xl w-36' />
                   
                </div>
                <div className='w-[80%] justify-start ml-5 flex flex-col'>
                    <h2 className='text-center text-xl mb-5'>{name}</h2>
                    <div className='flex flex-col space-y-6 items-end pr-10'>
                        {category !== "Beverages" ? (
                            <>
                                <div className='flex space-x-2'>
                                    <p className=''>Crust :</p>
                                    <p className='border-b-2 border-white border-dashed italic'>{crust}</p>
                                </div>
                                <div className='flex space-x-2'>
                                    <p className=''>Size :</p>
                                    <p className='border-b-2 border-white border-dashed italic'>{size}</p>
                                </div>
                                <div className='flex space-x-2'>
                                    <p className=''>Topping :</p>
                                    <p className='border-b-2 border-white border-dashed italic'>{topping}</p>
                                </div>
                                <div className='flex space-x-2'>
                                    <p className=''>Quantity :</p>
                                    <p className='border-b-2 border-white border-dashed italic'>{quantity}</p>
                                </div>
                                <div className='flex space-x-2'>
                                    <p className=''>Price :</p>
                                    <p className='border-b-2 border-white border-dashed italic'>{price}</p>
                                </div>
                                <button className=' px-5 py-3 rounded-lg shadow-2xl hover:drop-shadow-3xl hover:transition-all bg-gray-400'><FaTrashAlt color='black' onClick={removeItem}/></button>
                            </>
                        ) : (
                            <>
                                <div className='flex space-x-2'>
                                    <p className=''>Quantity :</p>
                                    <p className='border-b-2 border-white border-dashed italic'>{quantity}</p>
                                </div>
                                <div className='flex space-x-2'>
                                    <p className=''>Price :</p>
                                    <p className='border-b-2 border-white border-dashed italic'>{price}</p>
                                </div>
                                <button className='hover:drop-shadow-3xl'  onClick={removeItem}><FaTrashAlt color='white' size={30}/></button>
                            </>
                        )}
                    </div>
                </div>
            </div>
    );
}

export default CartCard;
