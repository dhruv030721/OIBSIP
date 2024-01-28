import React, { useEffect, useState } from 'react'
import Logo from '../../assets/wallpaper/Chef.png'
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../../components'
import { logout } from '../../store/adminAuthSlice'

function AdminLayout() {

  const menus = [
    {
      name: "Dashboard",
      path: 'dashboard',
    },
    {
      name: "Order History",
      path: 'order-history',
    },
    {
      name: "Add Item",
      path: 'add-item',
    },
    {
      name: "Edit Item",
      path: 'edit-item',
    },
    {
      name: "Add Ingredient",
      path: 'add-ingredient',
    },
    {
      name: "Manage Ingredients",
      path: 'manage-ingredients',
    },
  ]

  const [AdminData, setAdminData] = useState({});

  const admin = useSelector((state) => state.adminAuth.userData)
  const dispatch = useDispatch();

  const LogoutHandler = () => {
    document.cookie = 'admintoken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    dispatch(logout())
  }

  useEffect(() => {
    setAdminData(admin)
  }, [admin])


  return (
    <div className='flex flex-wrap font-poppins bg-bg-gray '>
      <div className='min-w-[20%] h-screen py-10 fixed  flex flex-col rounded-se-xl rounded-ee-xl shadow-2xl bg-bg-gray bg-transparent bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30  before:bg-black before:absolute before:top-0 before:w-full before:h-full before:opacity-40 before:-z-20 text-white  before:rounded-se-xl before:rounded-ee-xl border-r-2 border-orange-500 '>
        {/* Admin Details */}
        <div className='flex flex-col gap-3 items-center bg-bg-gray border-y-2 border-orange-500 rounded-2xl mx-5 p-5'>
          <img src={Logo} alt="" className='max-w-20 drop-shadow-3xl' />
          <h2 className='font-kaushan'>{AdminData.name}</h2>
          <h3 className='font-kaushan'>{AdminData.role}</h3>
        </div>
        {/* Navigation Buttons */}
        <div className='px-14 pt-10 flex flex-col gap-8 text-sm overflow-y-auto'>
          {menus.map((item) => (
            <div key={item.name} className='h-10  shadow-xl bg-transparent rounded-lg drop-shadow-3xl font-bold  relative group '>
              <NavLink to={item.path} className={({ isActive }) => ` ${isActive ? "before:w-1 before:h-full" : "before:w-0"} before:absolute  before:bg-orange-500 before:h-full group-hover:before:w-1  items-center flex group-hover:transition-all before:top-0 before:left-0 before:transition-all before:-z-10  before:rounded-2xl w-full h-full justify-left ml-10`}>{item.name}</NavLink>
            </div>
          ))}
          <Button btnName="Logout" className="mt-5" onClick={LogoutHandler} />
        </div>
      </div>
      <div className='flex w-full  min-h-screen'>
        <div className='min-w-[20%] h-full'></div>
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout
