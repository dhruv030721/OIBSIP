import React, { useCallback, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import EditIngredient from './EditIngredient.jsx';
import { addIngredients } from '../../../store/productSlice.js';
import productService from '../../../services/productService.js';
import { addIngredientDataError } from '../../../store/errorSlice.js';
import { MdOutlineRefresh } from "react-icons/md";

function ManageIngredients() {

    const IngredientsData = useSelector((state) => state.product.ingredients)
    const dispatch = useDispatch();
    const [rotate, setRotate] = useState(false);

    const RefreshPage = useCallback(async () => {
        try {
            setRotate(true)
            const IngredientResponse = await productService.GetIngredients();
            dispatch(addIngredients(IngredientResponse.data))
            setRotate(false)
        } catch (error) {
            console.error("Error fetching items:", error);
            dispatch(addIngredientDataError({ message: error.response.statusText, statusCode: error.response.status }))
        }
    }, [IngredientsData]
    )


    return (
        <div className='w-full'>
            <div className='p-10 flex flex-col'>
                <h2 className='text-orange-300 font-kaushan text-4xl text-center'>Manage Ingredient</h2>
                <div className='min-h-[1px] bg-gradient-to-r from-bg-gray via-orange-500  to-bg-gray mt-5'></div>
            </div>
            <div className='text-white flex text-xl space-x-2 justify-end pr-10 cursor-pointer group' onClick={RefreshPage}>
                <h1>Refresh</h1>
                <button><MdOutlineRefresh size={25} color='white' className={`${rotate ? "animate-spin" : ""}`} /></button>
            </div>

            <div className='flex flex-col mb-10'>
                {
                    IngredientsData.map((Ingredient) => (
                        <EditIngredient key={Ingredient._id} ingredient={Ingredient} Refresh={RefreshPage} />
                    ))
                }
            </div>
        </div>
    )
}

export default ManageIngredients
