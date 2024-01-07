import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function Layout() {
  let auth = { 'token': true };
  return auth.token ? (
    <div className=''>
      <div className='bg-bg-gray'>
        <Header />
      </div>
      <Outlet />
      <div className='bg-bg-gray'>
        <Footer />
      </div>
    </div>
  ) : <Navigate to="login" />
}
export default Layout
