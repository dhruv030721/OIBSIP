import React, { useEffect, useState, useCallback } from 'react'
import { Input, Button } from '../../../components'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import adminService from '../../../services/adminService';

function EditIngredient({ ingredient, Refresh }) {

    const { register, handleSubmit, setValue } = useForm();
    const [underQuantity, setunderQuantity] = useState(false);

    const EditIngredientHandler = async (data) => {
        try {
            await toast.promise(
                adminService.EditIngredient(ingredient._id, data),
                {
                    loading: "Processing...",
                    success: (response) => {
                        Refresh();
                        return `${response.message}`
                    },
                    error: (error) => {
                        return `${error.response.data.message}`
                    }
                }
            )
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(ingredient.quantity < 20){
            setunderQuantity(true)
        }else{
            setunderQuantity(false)
        }
        setValue("quantity", ingredient.quantity)
    },[EditIngredientHandler])

    return (
        <div className='text-white bg-dark-blue mx-10 flex rounded-lg py-5 px-4 shadow-xl mb-5 items-center'>
            <h1 className='w-[30%]'>{ingredient.name}</h1>
            <p className='w-[20%]'>Category : {ingredient.category}</p>
            <div className='w-[50%] flex'>
                <p className='text-center'>Quantity :</p>
                <form >
                    <Input className='my-0 mx-5 bg-transparent border-white w-[50%]' {...register("quantity")} />
                </form>
                {underQuantity ? <p className='text-red-500 font-black'>Going out of Stock</p> : null}
            </div>
            <Button className='w-full m-0' btnName='Edit' onClick={handleSubmit(EditIngredientHandler)} />
        </div>
    )
}

export default EditIngredient
