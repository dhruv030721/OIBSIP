import React from 'react'
import { Input, Button, TextArea, Select } from '../../../components/index'
import { useForm } from 'react-hook-form'
import adminService from '../../../services/adminService'
import toast, { Toaster } from 'react-hot-toast'


function AddItem() {

  const { register, handleSubmit, reset,  formState: { errors } } = useForm();

  const AddItemHandler = async (data) => {
    try {
      await toast.promise(
        adminService.AddItem(data), {
        loading: 'Processing...',
        success: (response) => {
          reset()
          return `${response.message}`;
        },
        error: (error) => {
          return `${error}`
        },
      }
      )

    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className='w-full'>
      <div className='px-10 py-5 flex flex-col items-center'>
        <h2 className='text-orange-300 font-kaushan text-4xl text-center flex'>Add Item </h2>
      </div>
      <div className='min-h-[0.05rem]  bg-gradient-to-r from-bg-gray via-orange-500  to-bg-gray'></div>
      <div className='py-5 px-32'>
        <form className='grid grid-cols-2 gap-16 items-start' onSubmit={handleSubmit(AddItemHandler)}>
          <div>
            <Input label="Item Name" className='bg-transparent border-white text-white font-light' labelclassName='text-white font-light ' {...register("itemname", {
              required: true,
            })} />
            {errors.itemname && <p className='text-red-500'>*Please check the item name</p>}
          </div>
          <div className='flex flex-col gap-y-3'>
            <Input label="Price" placeholder="Regular Size" className='bg-transparent border-white text-white' labelclassName='text-white font-light' {...register("regularprice", {
              required: true,
              pattern: /^[0-9]+$/,
            })} />
            <Input placeholder="Medium Size" className='bg-transparent border-white text-white' labelclassName='text-white font-light' {...register("medimumprice", {
              pattern: /^[0-9]+$/,
            })} />
            <Input placeholder="Large Size" className='bg-transparent border-white text-white' labelclassName='text-white font-light' {...register("largeprice", {
              pattern: /^[0-9]+$/,
            })} />
            {errors.price && <p className='text-red-500'>*Please check the price field</p>}
          </div>
          <div>
            <Input label="Image" className='bg-transparent border-none rounded-2xl border-white text-white' labelclassName='text-white font-light' type="file" {...register("img", {
              required: true
            })} />
            {errors.img && <p className='text-red-500'>*Upload Image</p>}
          </div>
          <div className='flex items-center gap-5'>
            <input className="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-5 h-5" type="checkbox" {...register("istrending")}  ></input>
            <label htmlFor="" className='text-white'>isTrending?</label>
          </div>
          <TextArea className="border-white text-white" label="Description" rows='4' cols='10' {...register("description")} />
          <div>
            <Select label="Category" options={['Veg Pizza', 'Non Veg Pizza', 'Beverages']} {...register("category", {
              required: true,
            })} />
          </div>
            <Button btnName="Add" className="w-[50%]" onClick={handleSubmit(AddItemHandler)} />
        </form>
      </div>
      <Toaster />
    </div>
  )
}

export default AddItem
