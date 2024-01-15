import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import { Login, Home, Signup, ContactUs, AboutUs, Category, AdminLogin, AdminLayout, EditProfile, Dashboard, Admin, EditItem, AddItem, Cart } from './pages/index'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { Protected, ProtectedAdmin } from './components/index.js'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route path='' element={<App />}>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='category' element={<Category />} />
        <Route path='cart' element={<Protected authentication><Cart /></Protected>} />
        <Route path='aboutus' element={<AboutUs />} />
        <Route path='contactus' element={<ContactUs />} />
      </Route>
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='admin' element={<Admin />}>
        <Route index element={<AdminLogin />} />
        <Route path='' element={<ProtectedAdmin authentication><AdminLayout /></ProtectedAdmin>}>
          <Route path='dashboard' element={<ProtectedAdmin authentication><Dashboard /></ProtectedAdmin>} />
          <Route path='edit-profile' element={<ProtectedAdmin authentication><EditProfile /></ProtectedAdmin>} />
          <Route path='add-item' element={<ProtectedAdmin authentication><AddItem /></ProtectedAdmin>} />
          <Route path='edit-item' element={<ProtectedAdmin authentication><EditItem /></ProtectedAdmin>} />
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
