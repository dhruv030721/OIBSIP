import React, { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { useDispatch } from 'react-redux'
import productService from './services/productService.js'
import { additem } from './store/productSlice'


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try{
        const response = await productService.getitem();
        dispatch(additem(response.data))
      } catch (error) {
        console.error("Error fetching items:", error);
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
