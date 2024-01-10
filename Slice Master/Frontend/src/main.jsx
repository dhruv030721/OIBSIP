import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import { Login, Home, Signup, ContactUs, AboutUs, Category, AdminLogin, AdminLayout, EditProfile, Dashboard, Admin } from './pages/index'
import { Provider } from 'react-redux'
import store from './store/store.js'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route path='' element={<App />}>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='contactus' element={<ContactUs />} />
        <Route path='aboutus' element={<AboutUs />} />
        <Route path='category' element={<Category />} />
      </Route>
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='admin' element={<Admin />}>
        <Route path='login' element={<AdminLogin />} />
        <Route path='' element={<AdminLayout />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='edit-profile' element={<EditProfile />} />
        </Route>

      </Route>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
