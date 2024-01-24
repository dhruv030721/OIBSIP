import React from 'react'
import { useSelector } from 'react-redux'
import EditItemCard from './EditItemCard';


function EditItem() {

  const Items = useSelector((state) => state.product.items)


  return (
    <div className='w-full '>
      <div className='p-10 flex flex-col'>
        <h2 className='text-orange-300 font-kaushan text-4xl text-center'>Edit Item</h2>
        <div className='min-h-[1px] bg-gradient-to-r from-bg-gray via-orange-500  to-bg-gray mt-5'></div>
      </div>
      <div className='grid grid-cols-3 gap-10 m-5'>
        {
          Items.map((item) => (
           <EditItemCard key={item._id} item={item} />
          ))
        }
      </div>
    </div>
  )
}

export default EditItem
