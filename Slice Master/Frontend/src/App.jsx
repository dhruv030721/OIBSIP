import React, { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
function App() {

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
