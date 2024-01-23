import React, { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { Outlet, useSearchParams } from 'react-router-dom'
import productService from '../../services/productService'
import adminService from '../../services/adminService'
import { useDispatch } from 'react-redux'
import { addItemDataError, addIngredientDataError, addOrderDataError } from '../../store/errorSlice'
import { additem, addIngredients, addOrders } from '../../store/productSlice'
import { jwtDecode } from 'jwt-decode'
import { login } from '../../store/adminAuthSlice'
import { Loading } from '../../components'

function Admin() {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const getCookie = (name) => {
    const cookieString = document.cookie;
    const cookies = cookieString.split('; ');

    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName === name) {
        return decodeURIComponent(cookieValue)
      }
    }

    return null
  }


  const decodedData = () => {
    const token = getCookie("admintoken");
    if(token !== null){
      const data = jwtDecode(token)
      return data
    }
    return null
  }


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
          dispatch(addOrders(OrderResponse.data.orders))
          setLoading(false)
        } catch (error) {
          console.error("Error fetching items:", error);
          dispatch(addOrderDataError({ message: error.response.statusText, statusCode: error.response.status }))
        }
      })();
      const data = decodedData();
      if (data) {
        dispatch(login(data.user))
      }
  })

    if(loading){
      return (
        <Loading message="Verifying..."/>
      )
    }



  return (
    <>
      <Outlet />
      <Toaster />
    </>
  )
}

export default Admin
