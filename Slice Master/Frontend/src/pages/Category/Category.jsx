import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Card from '../../components/Card'
import Veg from '../../assets/Veg.png'
import NonVeg from '../../assets/NonVeg.png'
import AnchorLink from "react-anchor-link-smooth-scroll";
// import { useSelector } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux';
import productService from '../../services/productService.js';
import { additem } from '../../store/productSlice.js'

function Category() {

  const categories = ["Veg Pizza", "Non Veg Pizza", "Garlic Breads", "Beverages"];
  const [pizzaItem, setPizzaItem] = useState([]);
  const [isLoading, setLoading] = useState(false);
  // const pizzaItem = useSelector((state) => { state.product.items })
  // console.log(pizzaItem)

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const items = await productService.getitem();
        dispatch(additem(items.data))
        setPizzaItem(items.data);
        // console.log(pizzaItem) 
      } catch (error) {
        console.error("Error fetching items:", error);
      } finally {
        setLoading(false);
      }
    })();

  }, [])

  return (
    <div className='bg-bg-gray pt-[8vh] font-poppins text-sm  '>
      {/* Navigation Bar */}
      {/* <nav className='h-[6vh] bg-bg-gray fixed flex justify-around w-full bg-transparent bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 text-white  before:bg-black before:absolute before:w-full before:h-full before:opacity-40 before:-z-20  z-10 items-center'>
        {categories.map((item) => (
          <AnchorLink key={item} href="#garlicbreads">
            <NavLink className={({ }) => `relative hover:scale-110 transition-all hover:transition-all outline-none before:bg-orange-500 before:absolute before:w-0 hover:before:transition-all before:top-7 before:left-0 before:h-0.5 hover:before:w-full`}>{item}</NavLink>
          </AnchorLink>
        ))}

      </nav> */}

      {/* Items */}

      {/* Category Banner */}
      {isLoading ? (<h1 className='text-white text-center'>Loading....</h1>) : (
        <div className='mt-5'>
          <section className='px-10 ' id='vegpizza'>
            <h2 className='text-orange-500 text-2xl font-kaushan text-center my-8 '>--- Veg Pizza ---</h2>
            <div className='grid grid-cols-4 gap-16'>
              {pizzaItem.map((item) => (
                <Card key={item.name} img={item.imgUrl} logo={item.category === 'Non Veg Pizza'
                  ? NonVeg
                  : item.category === 'Veg Pizza'
                    ? Veg
                    : null} description={item.description} name={item.name} price={item.price} />
              ))}
            </div>
          </section>
        </div>
      )}

    </div>
  )
}

export default Category
