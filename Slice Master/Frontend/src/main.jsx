import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Login, Home, Signup , ContactUs } from './pages/index'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route path='' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='contactus' element={<ContactUs />} />
      </Route>
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
    </Route>
  )

)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
