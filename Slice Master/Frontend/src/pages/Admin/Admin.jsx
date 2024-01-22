import React, { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'
import productService from '../../services/productService'
import adminService from '../../services/adminService'
import { useDispatch } from 'react-redux'
import { addItemDataError, addIngredientDataError, addOrderDataError } from '../../store/errorSlice'
import { additem, addIngredients, addOrders } from '../../store/productSlice'

function Admin() {

  const dispatch = useDispatch();


  useEffect(() => {
    ; (async () => {
      try {
        const ItemResponse = await productService.GetItem();
        dispatch(additem(ItemResponse.data))
      } catch (error) {
        console.error("Error fetching items:", error);
        dispatch(addItemDataError({ message: error.response.statusText, statusCode: error.response.status }))
      }
    })()
      ; (async () => {
        try {
          const IngredientsResponse = await productService.GetIngredients();
          dispatch(addIngredients(IngredientsResponse.data))
        } catch (error) {
          console.error("Error fetching items:", error);
          dispatch(addIngredientDataError({ message: error.response.statusText, statusCode: error.response.status }))
        }
      })()
      ; (async () => {
        try {
          const OrderResponse = await adminService.GetOrder();
          console.log(OrderResponse)
          dispatch(addOrders(OrderResponse.data.orders))
        } catch (error) {
          console.error("Error fetching items:", error);
          dispatch(addOrderDataError({ message: error.response.statusText, statusCode: error.response.status }))
        }
      })()
  })




  return (
    <>
      <Outlet />
      <Toaster />
    </>
  )
}

export default Admin
