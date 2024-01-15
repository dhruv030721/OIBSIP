import React, { useState, useEffect } from 'react'
import Card from '../../components/Product/Card.jsx'
import Veg from '../../assets/Veg.png'
import NonVeg from '../../assets/NonVeg.png'
import { LottieAnimation } from '../../components/index.js'
import DeliveryBoy from '../../assets/jsons/deliveryboy.json'
import { useSelector } from 'react-redux'


function TrendingProducts() {

  const [pizzaItem, setPizzaItem] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const items = useSelector((state) => state.product.items);

  useEffect(() => {
    (async () => {
      try {
        if(items == null){
          setLoading(true)
        }else{
          setTimeout(() => {
            setPizzaItem(items)
            setLoading(false)
          }, 1000);
        }
      } catch (error) {
        console.error("Error fetching items:", error);
        setError(error);
        setLoading(true);
      }
    })();
  }, [items]);



  return (
    <div className='font-poppins font-black bg-bg-gray p-5 flex flex-col items-center'>
      <div className=' border-b-orange-500 border-2 border-transparent block mb-10 p-5'>
        <h1 className='text-center text-orange-500 text-3xl font-kaushan'>Trending Products</h1>
      </div>
      {isLoading ?  (<div className='bg-bg-gray pt-[8vh] font-poppins text-lg h-screen flex flex-col justify-center items-center'>
      <LottieAnimation json={DeliveryBoy} divclassName='w-full' />
    </div>): (<div className='grid grid-cols-4 gap-16'>
        {pizzaItem.filter((item) => item.isTrending).map((item) => (
          <Card key={item.name} img={item.imgUrl} logo={item.category === 'Non Veg Pizza'
            ? NonVeg
            : item.category === 'Veg Pizza'
              ? Veg
              : null} description={item.description} name={item.name} price={item.price} />
        ))}
      </div>) }
      
    </div>
  )
}

export default TrendingProducts
