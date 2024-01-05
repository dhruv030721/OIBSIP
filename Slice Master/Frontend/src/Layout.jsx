import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function Layout() {
  let auth = {'token': true};
  return auth.token ? (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  ) : <Navigate to="login" />
}
export default Layout
