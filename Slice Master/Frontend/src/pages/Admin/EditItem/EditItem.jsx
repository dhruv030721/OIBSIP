import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EditItemCard from './EditItemCard';
import toast from 'react-hot-toast'
import adminService from '../../../services/adminService'
import productService from '../../../services/productService'
import { additem } from '../../../store/productSlice'
import { Loading } from '../../../components'
import { MdOutlineRefresh } from "react-icons/md";

function EditItem() {

  const Items = useSelector((state) => state.product.items)
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);

  const Refresh = useCallback(async () => {
    const ItemData = await productService.GetItem();
    dispatch(additem(ItemData.data));
    setLoading(false)
  }, [Items])

  useEffect(() => {
    Refresh();
  }, [Items]) 


  const DeleteItem = async (id) => {
    try {
      setLoading(true);
      await toast.promise(
        adminService.DeleteItem(id), {
        loading: "Processing...",
        success: (response) => {
          Refresh();
          return `${response.message}`
        }, error: (error) => {
          return `${error.response.data.message}`
        }
      }
      )
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  }


  return (
    <div className='w-full '>
      <div className='p-10 flex flex-col'>
        <h2 className='text-orange-300 font-kaushan text-4xl text-center'>Edit Item</h2>
        <div className='min-h-[1px] bg-gradient-to-r from-bg-gray via-orange-500  to-bg-gray mt-5'></div>
      </div>
      {isLoading ? (
        <div className='w-full'>
          <Loading />
        </div>
      ) : (
        <div className='grid grid-cols-3 gap-10 m-5'>
          {Items.map((item) => <EditItemCard key={item._id} item={item} DeleteItem={DeleteItem} />)}
        </div>)}
    </div>
  )
}

export default EditItem
