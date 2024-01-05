import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import {Login, Home} from './pages/index'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
        <Route path='' element={<Layout />}>
          <Route index element={<Home/>} />
        </Route>
        <Route path='login' element={<Login />}/>
    </Route>
  )

)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>,
)
