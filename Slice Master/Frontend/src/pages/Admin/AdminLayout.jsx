import React from 'react'
import Logo from '../../assets/wallpaper/Chef.png'
import { NavLink, Outlet } from 'react-router-dom';

function AdminLayout() {

  const menus = [
    {
      name: "Dashboard",
      path: 'dashboard',
    },
    {
      name: "Edit Profile",
      path: 'edit-profile',
    },
    {
      name: "Add Item",
      path: 'add-item',
    },
    {
      name: "Edit Item",
      path: 'edit-item',
    },
  ]



  return (
    <div className='flex flex-wrap font-poppins bg-bg-gray'>
      <div className='min-w-[20%] h-screen py-10 flex flex-col rounded-se-xl rounded-ee-xl shadow-2xl bg-bg-gray bg-transparent bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30  before:bg-black before:absolute before:top-0 before:w-full before:h-full before:opacity-40 before:-z-20 text-white  before:rounded-se-xl before:rounded-ee-xl border-r-2 border-orange-500'>
        {/* Admin Details */}
        <div className='flex flex-col gap-3 items-center bg-bg-gray border-y-2 border-orange-500 rounded-2xl mx-5 p-5'>
          <img src={Logo} alt="" className='max-w-20 drop-shadow-3xl' />
          <h2 className='font-kaushan'>Dhruv Godhani</h2>
          <h3 className='font-kaushan'>Admin</h3>
        </div>
        {/* Navigation Buttons */}
        <div className='px-14 py-10 flex flex-col gap-8 text-sm'>
          {menus.map((item) => (
            <div key={item} className='text-center py-3 shadow-xl bg-transparent rounded-lg drop-shadow-3xl font-bold  relative group '>
              <NavLink to={item.path} className={({ isActive }) => ` ${isActive ? "before:w-1 before:h-full" : "before:w-0"} before:absolute before:h-0 before:bg-orange-500 group-hover:before:h-full group-hover:before:w-1 group-hover:transition-all before:top-0 before:left-0 before:transition-all before:-z-10  before:rounded-2xl w-full h-full block`}>{item.name}</NavLink>
            </div>
          ))}
        </div>
      </div>
      <div className='max-w-[80]'>
        <Outlet />
      </div>
    </div>
  )
}

export default AdminLayout
