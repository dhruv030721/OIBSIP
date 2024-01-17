import React, { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { useDispatch } from 'react-redux'
import productService from './services/productService.js'
import { additem, addIngredients } from './store/productSlice'
import { addIngredientDataError, addItemDataError } from './store/errorSlice.js'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    ;(async () => {
      try {
        const ItemResponse = await productService.GetItem();
        dispatch(additem(ItemResponse.data))
      } catch (error) {
        console.error("Error fetching items:", error);
        dispatch(addItemDataError({ message: error.ItemResponse.statusText, statusCode: error.ItemResponse.status }))
      }
    })()
      ;(async () => {
        try {
          const IngredientsResponse = await productService.GetIngredients();
          dispatch(addIngredients(IngredientsResponse.data))
        } catch (error) {
          console.error("Error fetching items:", error);
          dispatch(addIngredientDataError({ message: error.IngredientsResponse.statusText, statusCode: error.IngredientsResponse.status }))
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
      </div>
    </>
  )
}
export default App
