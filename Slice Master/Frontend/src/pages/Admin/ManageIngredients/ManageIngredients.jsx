import React from 'react'
import { Input, Select, Button } from '../../../components'
import { useForm } from 'react-hook-form'
import toast , {Toaster} from 'react-hot-toast'
import adminService from '../../../services/productService.js';

function ManageIngredients() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const addIngredientsHandler = async (data) => {
    try {
      await toast.promise(
        adminService.AddIngredients(data),
        {
          loading: 'Processing...',
          success: (response) => {
            return `${response.message}`;
          },
          error: (error) => {
            return `${error.response.data.message}`
          },
        }
      );
    } catch (error) {
      console.error(error);
    }

  }




  return (
    <div className='w-full'>
      <div className='p-10 flex flex-col'>
        <h2 className='text-orange-300 font-kaushan text-4xl text-center'>Manage Ingredients</h2>
        <div className='min-h-[0.05rem] bg-gradient-to-r from-bg-gray via-orange-500  to-bg-gray mt-5'></div>
      </div>
      <div className=''>
        <form className='grid grid-cols-2 gap-16 items-start px-32' onSubmit={handleSubmit(addIngredientsHandler)}>
          <div>
            <Input label="Name" labelclassName='text-white font-light' className="bg-transparent border-white text-white" {...register("name", {
              required: true,
            })} />
            {errors.name && <p className='text-red-500'>*Please check the name</p>}
          </div>
          <div>
            <Input label="Quantity" labelclassName='text-white font-light' className="bg-transparent border-white text-white" type='number' {...register("quantity", {
              required: true,
              pattern: /^[0-9]+$/,
            })} />
            {errors.contactNumber && <p className='text-red-500'>*Please check the field</p>}
          </div>
          <div>
            <Input label="Price" className='bg-transparent border-white text-white' labelclassName='text-white font-light' {...register("price", {
              required: true,
              pattern: /^[0-9]+$/,
            })} />
            {errors.price && <p className='text-red-500'>*Please check the price field</p>}
          </div>
          <div>
            <Select label="Category" options={['Crust', 'Topping']} {...register("category", {
              required: true,
            })} />
          </div>
          <Button btnName="Add Ingredients" className="w-[50%]" onClick={handleSubmit(addIngredientsHandler)} />
        </form>
      </div>
      <Toaster/>
    </div>
  )
}

export default ManageIngredients
