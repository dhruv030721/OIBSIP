import React from 'react';
import { useDispatch } from 'react-redux';
import { removeCartItem, removeWholeItem } from '../../store/cartSlice';
import toast from 'react-hot-toast';
import { FaTrashAlt } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { MdRemove } from "react-icons/md";
import { addCartItem } from '../../store/cartSlice';



function CartCard({ name, img, category, crust, size, topping, quantity, price }) {

    const dispatch = useDispatch();

    const removeAll = () => {
        dispatch(removeWholeItem(name))
        toast.success("Item removed!", {
            position: "bottom-right"
        })
    }

    const addItem = () => {
        dispatch(addCartItem({ name: name, category: category }))
    }

    const removeItem = () => {
        dispatch(removeCartItem(name))
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
                                <p className='border-b-2 border-white border-dashed italic'>{price} /-</p>
                            </div>
                            <div className='flex space-x-10'>
                                <div className='flex border-2  border-orange-500 text-white items-center rounded-lg justify-center'>
                                    <div className='group w-full px-3 py-2 h-full flex items-center justify-center' onClick={addItem}><MdAdd size={20} className='group-hover:scale-125 transition-all' /></div>
                                    <div className='h-full w-0.5 bg-white'></div>
                                    <div className='group w-full px-3 py-2  h-full' onClick={removeItem}><MdRemove size={20} className='group-hover:scale-125 transition-all' /></div>
                                </div>
                                <button className='hover:drop-shadow-3xl' onClick={removeAll}><FaTrashAlt color='white' size={30} /></button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='flex space-x-2'>
                                <p className=''>Quantity :</p>
                                <p className='border-b-2 border-white border-dashed italic'>{quantity}</p>
                            </div>
                            <div className='flex space-x-2'>
                                <p className=''>Price :</p>
                                <p className='border-b-2 border-white border-dashed italic'>{price} /-</p>
                            </div>
                            <div className='flex space-x-10'>
                                <div className='flex border-2  border-orange-500 text-white items-center rounded-lg justify-center'>
                                    <div className='group w-full px-3 py-2 h-full flex items-center justify-center' onClick={addItem}><MdAdd size={20} className='group-hover:scale-125 transition-all' /></div>
                                    <div className='h-full w-0.5 bg-white'></div>
                                    <div className='group w-full px-3 py-2  h-full' onClick={removeItem}><MdRemove size={20} className='group-hover:scale-125 transition-all' /></div>
                                </div>
                                <button className='hover:drop-shadow-3xl' onClick={removeAll}><FaTrashAlt color='white' size={30} /></button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CartCard;
