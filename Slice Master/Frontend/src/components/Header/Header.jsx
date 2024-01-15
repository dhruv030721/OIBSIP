import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import PizzaIcon from '../../assets/wallpaper/pizzaIcon.png'
import { BsCart3 } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
import { useSelector } from 'react-redux';


function Header() {

  const menu = [{ name: "Home", link: '/' }, { name: "Category", link: 'category' }, { name: "About Us", link: 'aboutus' }, { name: "Contact Us", link: 'contactus' },];

  const [isLogin, setisLogin] = useState(false);
  const [profileName, setProfileName] = useState("");
  const [itemLength, setItemLength] = useState(0);
  const authStatus = useSelector(state => state.auth.status)
  const userData = useSelector(state => state.auth.userData);
  const item = useSelector(state => state.product.items);


  useEffect(() => {
    if (authStatus) {
      const name = userData.name;
      setProfileName(name);
      setisLogin(true);
      console.log(itemLength)
    }
    if(item == null){
      setItemLength(0);
    } else{
      setItemLength(item.length)
    }
  }, [authStatus, userData , item, useSelector]);

  return (
    <div className='h-[8vh] fixed z-20 flex items-center bg-bg-gray justify-between w-full bg-transparent bg-clip-padding backdrop-filter backdrop-blur-sm before:bg-black before:absolute before:w-full before:h-full before:opacity-70 before:-z-10 text-white '>
      <div className='flex items-center ml-5'>
        {/* Logo */}
        <h1 className='logo-text font-parisienne font-black text-3xl first-letter:text-orange-500 '>Slice&#160;</h1>
        <h1 className='logo-text font-parisienne font-black text-3xl first-letter:text-red-500 '>Master</h1>
        <img src={PizzaIcon} alt="" className='w-10 h-10 animate-wiggle drop-shadow-3xl' />
      </div>
      <nav className='flex justify-center'>
        {/* navbar */}
        <ul className='flex justify-center items-center gap-6 font-poppins '>
          {menu.map((item) => (
            <NavLink key={item.name} to={item.link} className={({ isActive }) => `relative hover:scale-110 transition-all hover:transition-all outline-none before:bg-orange-500 before:absolute before:w-0 hover:before:transition-all before:top-7 before:left-0 before:h-[0.1vh] hover:before:w-full ${isActive ? "before:w-full" : "before:w-0"}`}>{item.name}</NavLink>
          ))}
        </ul>
      </nav>
      <div>
        {/* cart and login  */}
        <div className='flex items-center mr-10 font-poppins font-bold justify-center'>
          <div before={itemLength} className={`${itemLength == 0 ? "before:content-[]" : "before:content-[attr(before)]"} before:bg-orange-500 relative before:absolute before:px-2 before:rounded-full before:bottom-3 before:left-3 hover:scale-110 transition-all z-10 before:z-20`}>
            <Link to='/cart'><BsCart3 color='white' size={25} className={`mr-5 hover:drop-shadow-3xl `} /></Link>
          </div>
          {isLogin ? (
            <div className='relative group'>
              <div className='flex flex-col justify-center items-center hover:drop-shadow-3xl'>
                <IoIosContact size={30} />
                <Link className='text-[0.7rem]'>{profileName}</Link>
              </div>
              <div className='absolute text-white bg-black rounded-lg before:rounded-lg top-14 text-[0.8rem] py-5  w-[130%] px-2 border-y-2 border-orange-500 opacity-0 transition-all bg-transparent bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30  before:bg-black before:absolute before:w-full before:h-full before:opacity-40 before:-z-10 before:top-0 before:left-0 -translate-y-10 group-hover:translate-y-0 group-hover:opacity-100'>
                <ul className='flex flex-col items-center gap-y-5 text-center'>
                  <li className=' before:bg-orange-500 5 hover:before:w-0 hover:scale-110 transition-all '><Link className=''>Edit Profile</Link></li>
                  <li className=' before:bg-orange-500 5 hover:before:w-0 hover:scale-110 transition-all '><Link className=''>Logout</Link></li>
                </ul>
              </div>
            </div>
          ) : (<Link to={'login'} className="smky-btn3 relative hover:text-black py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-orange-500 after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-white">Login</Link>)}
        </div>



      </div>
    </div>
  )
}

export default Header
