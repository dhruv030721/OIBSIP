import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import { Login, Home, Signup, ContactUs, OurMenu, AdminLogin, AdminLayout, EditUserProfile, Dashboard, Admin, EditItem, AddItem, Cart, ForgotPassword, ManageIngredients } from './pages/index'
import { Provider } from 'react-redux'
import {store} from './store/store.js'
import { Protected, ProtectedAdmin } from './components/index.js'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route path='' element={<App />}>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='menu' element={<OurMenu />} />
        <Route path='cart' element={<Protected authentication><Cart /></Protected>} />
        <Route path='contactus' element={<ContactUs />} />
        <Route path='edit-userprofile' element={<Protected authentication><EditUserProfile /></Protected>} />
      </Route>
      <Route path='login' element={<Login />} />
      <Route path='forgotpassword' element={<ForgotPassword />} />
      <Route path='signup' element={<Signup />} />
      <Route path='admin' element={<Admin />}>
        <Route index element={<AdminLogin />} />
        <Route path='' element={<ProtectedAdmin authentication><AdminLayout /></ProtectedAdmin>}>
          <Route path='dashboard' element={<ProtectedAdmin authentication><Dashboard /></ProtectedAdmin>} />
          <Route path='add-item' element={<ProtectedAdmin authentication><AddItem /></ProtectedAdmin>} />
          <Route path='edit-item' element={<ProtectedAdmin authentication><EditItem /></ProtectedAdmin>} />
          <Route path='manage-ingredients' element={<ProtectedAdmin authentication><ManageIngredients /></ProtectedAdmin>} />
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
