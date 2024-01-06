import React from 'react'
import Card from './Card'
import Veg from '../../assets/Veg.png'
import NonVeg from '../../assets/NonVeg.png'
import FarmHouse from '../../assets/pizzaItem/FarmHouse.png'
import ChikenDominator from '../../assets/pizzaItem/ChickenDominator.png'
import DoubleChesseMargherita from '../../assets/pizzaItem/DoubleChesseMargherita.png'
import IndianTandooriPaneer from '../../assets/pizzaItem/IndianTandooriPaneer.png'
import PepperBarbeque from '../../assets/pizzaItem/PepperBarbeque.png'
function TrendingProducts() {

  const pizzaItem = [
    {
      img: FarmHouse,
      name: "Farm House",
      logo: Veg,
      price:500,
      desciption: "A pizza that goes ballistic on veggies! Check out this mouth watering overload of crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes",
    },
    {
      img: ChikenDominator,
      name: "Chiken Dominator",
      logo: NonVeg,
      price:650,
      desciption: "A pizza that goes ballistic on veggies! Check out this mouth watering overload of crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes",
    },
    {
      img: DoubleChesseMargherita,
      name: "Double Chesse Margherita",
      logo: Veg,
      price:700,
      desciption: "A pizza that goes ballistic on veggies! Check out this mouth watering overload of crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes",
    },
    {
      img: IndianTandooriPaneer,
      name: "Indian Tandoori Paneer",
      logo: Veg,
      price:1000,
      desciption: "A pizza that goes ballistic on veggies! Check out this mouth watering overload of crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes",
    },
  ]


  return (
    <div className='font-poppins font-black bg-bg-gray p-5 flex flex-col items-center'>
      <div className=' border-b-orange-500 border-2 border-transparent block mb-10 p-5'>
        <h1 className='text-center text-orange-500 text-3xl '>Trending Products</h1>
      </div>
      <div className='flex flex-row justify-evenly'>
        {pizzaItem.map((item) => (
          <Card key={item.name} img={item.img} logo={item.logo} description={item.desciption} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  )
}

export default TrendingProducts
