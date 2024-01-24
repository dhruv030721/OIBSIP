import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

function EditItemCard({ item }) {


    const DeleteItem = () => {
        
    }




    return (
        <div key={item._id} className='text-white flex flex-col bg-dark-blue py-7 px-6 rounded-xl items-center space-y-3 shadow-xl'>
            <div className='w-32 h-32'>
                <img src={item.imgUrl} alt="" className='w-full h-full object-contain  drop-shadow-3xl' />
            </div>
            <h1 className=''>{item.name}</h1>
            <p className='text-sm'>Category : {item.category}</p>
            <div className='flex items-center space-x-5'>
                <Link to={`/admin/edit-item/${item._id}`} className='bg-orange-200 py-2 px-5 font-black flex items-center gap-3 rounded-xl text-black'>Edit <FaEdit /></Link>
                <Link onClick={DeleteItem} className='bg-red-300 py-2 px-5 rounded-xl text-black'><FaTrashAlt /></Link>
            </div>
        </div>
    )
}

export default EditItemCard
