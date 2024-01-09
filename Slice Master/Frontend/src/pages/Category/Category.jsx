import React from 'react'
import { NavLink } from 'react-router-dom'
import Card from '../../components/Card'
import Veg from '../../assets/Veg.png'
import NonVeg from '../../assets/NonVeg.png'
import FarmHouse from '../../assets/pizzaItem/FarmHouse.png'
import ChikenDominator from '../../assets/pizzaItem/ChickenDominator.png'
import DoubleChesseMargherita from '../../assets/pizzaItem/DoubleChesseMargherita.png'
import IndianTandooriPaneer from '../../assets/pizzaItem/IndianTandooriPaneer.png'
import AnchorLink from "react-anchor-link-smooth-scroll";

function Category() {

  const categories = ["Veg Pizza", "Non Veg Pizza", "Garlic Breads", "Beverages"];
  const pizzaItem = [
    {
      img: FarmHouse,
      name: "Farm House",
      logo: Veg,
      price: 500,
      desciption: "A pizza that goes ballistic on veggies! Check out this mouth watering overload of crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes",
    },
    {
      img: ChikenDominator,
      name: "Chiken Dominator",
      logo: NonVeg,
      price: 650,
      desciption: "A pizza that goes ballistic on veggies! Check out this mouth watering overload of crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes",
    },
    {
      img: DoubleChesseMargherita,
      name: "Double Chesse Margherita",
      logo: Veg,
      price: 700,
      desciption: "A pizza that goes ballistic on veggies! Check out this mouth watering overload of crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes",
    },
    {
      img: IndianTandooriPaneer,
      name: "Indian Tandoori Paneer",
      logo: Veg,
      price: 1000,
      desciption: "A pizza that goes ballistic on veggies! Check out this mouth watering overload of crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes",
    },
  ]

  return (
    <div className='bg-bg-gray pt-[8vh] font-poppins text-sm '>
      {/* Navigation Bar */}
      <nav className='h-[6vh] bg-bg-gray fixed flex justify-around w-full bg-transparent bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 text-white  before:bg-black before:absolute before:w-full before:h-full before:opacity-40 before:-z-20 z-10  items-center shadow-2xl drop-shadow-2xl'>
        {categories.map((item) => (
          <AnchorLink key={item} href="#garlicbreads">
            <NavLink className={({ }) => `relative hover:scale-110 transition-all hover:transition-all outline-none before:bg-orange-500 before:absolute before:w-0 hover:before:transition-all before:top-7 before:left-0 before:h-0.5 hover:before:w-full`}>{item}</NavLink>
          </AnchorLink>
        ))}

      </nav>

      {/* Items */}

      {/* Category Banner */}
      <div className='mt-20'>
        <section className='' id='vegpizza'>
          <h2 className='text-orange-500 text-2xl font-kaushan text-center my-8 '>--- Veg Pizza ---</h2>
          <div className='flex flex-row justify-evenly'>{pizzaItem.map((item) => (
            <Card key={item.name} img={item.img} logo={item.logo} description={item.desciption} name={item.name} price={item.price} />
          ))}</div>
        </section>
        <section className='' id='nonvegpizza'>
          <h2 className='text-orange-500 text-2xl font-kaushan text-center my-8 '>--- Non Veg Pizza ---</h2>
          <div className='flex flex-row justify-evenly'>{pizzaItem.map((item) => (
            <Card key={item.name} img={item.img} logo={item.logo} description={item.desciption} name={item.name} price={item.price} />
          ))}</div>
        </section>
        <section className='' id='garlicbreads'>
          <h2 className='text-orange-500 text-2xl font-kaushan text-center my-8 '>--- Garlic Breads ---</h2>
          <div className='flex flex-row justify-evenly'>{pizzaItem.map((item) => (
            <Card key={item.name} img={item.img} logo={item.logo} description={item.desciption} name={item.name} price={item.price} />
          ))}</div>
        </section>
        <section className='' id='beverages'>
          <h2 className='text-orange-500 text-2xl font-kaushan text-center my-8 '>--- Beverages ---</h2>
          <div className='flex flex-row justify-evenly'>{pizzaItem.map((item) => (
            <Card key={item.name} img={item.img} logo={item.logo} description={item.desciption} name={item.name} price={item.price} />
          ))}</div>
        </section>
      </div>
    </div>
  )
}

export default Category
