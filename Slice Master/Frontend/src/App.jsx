import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer, Loading } from './components'
import { useDispatch } from 'react-redux'
import productService from './services/productService.js'
import { additem, addIngredients } from './store/productSlice'
import { addIngredientDataError, addItemDataError } from './store/errorSlice.js'
import { Toaster } from 'react-hot-toast'
import { jwtDecode } from 'jwt-decode'
import { login } from './store/authSlice.js'

function App() {

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
    const token = getCookie("token");
    if (token) {
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
          setLoading(false)
        } catch (error) {
          console.error("Error fetching items:", error);
          dispatch(addIngredientDataError({ message: error.response.statusText, statusCode: error.response.status }))
        }
      })();
    const data = decodedData();
    if (data) {
      dispatch(login(data.userdata))
    }
  })


  if (loading) {
    return (
      <Loading />
    )
  }


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
        <Toaster />
      </div>
    </>
  )
}
export default App
