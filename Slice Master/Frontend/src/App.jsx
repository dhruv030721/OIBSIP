import React, { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { useDispatch } from 'react-redux'
import productService from './services/productService.js'
import { additem, addIngredients } from './store/productSlice'
import { addIngredientDataError, addItemDataError } from './store/errorSlice.js'
import {Toaster} from 'react-hot-toast'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    ;(async () => {
      try {
        const ItemResponse = await productService.GetItem();
        dispatch(additem(ItemResponse.data))
      } catch (error) {
        console.error("Error fetching items:", error);
        dispatch(addItemDataError({ message: error.response.statusText, statusCode: error.response.status }))
      }
    })()
      ;(async () => {
        try {
          const IngredientsResponse = await productService.GetIngredients();
          dispatch(addIngredients(IngredientsResponse.data))
        } catch (error) {
          console.error("Error fetching items:", error);
          dispatch(addIngredientDataError({ message: error.response.statusText, statusCode: error.response.status }))
        }
      })()
  })


  return (
    <>
      <div className=''>
        <div className='bg-bg-gray'>
          <Header />
        </div>
        <Outlet />
        <div className='bg-bg-gray'>
          <Footer />
        </div>
        <Toaster/>
      </div>
    </>
  )
}
export default App
