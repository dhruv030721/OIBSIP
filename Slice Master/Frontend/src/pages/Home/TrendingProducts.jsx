import React, { useState, useEffect } from 'react'
import { LottieAnimation, ProductSection } from '../../components/index.js'
import DeliveryBoy from '../../assets/jsons/deliveryboy.json'
import { useSelector } from 'react-redux'


function TrendingProducts() {

  const [pizzaItem, setPizzaItem] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState("");
  const items = useSelector((state) => state.product.items);
  const error = useSelector((state) => state.error.dataError);
  const ingredients = useSelector((state) => state.product.ingredients)

  useEffect(() => {
    (async () => {
      if (error) {
        setLoading(true)
        console.log(error);
        setError(error.message);
      }
      if (items == null) {
        setLoading(true)
      } else {
        setError("");
        setTimeout(() => {
          setPizzaItem(items)
          setLoading(false)
        }, 1000);
      }
    })();
  }, [items, error]);



  return (
    <div className='font-poppins font-black bg-bg-gray px-5 flex flex-col items-center before:bg-pizza-background before:min-h-full before:w-full before:absolute before:opacity-20'>
      <div className=' border-b-orange-500 border-2 border-transparent block mb-10 p-5'>
        <h1 className='text-center text-orange-500 text-3xl font-kaushan'>Trending Products</h1>
      </div>
      {isLoading ? (<div className='bg-bg-gray pt-[8vh] font-poppins text-lg max-h-full flex flex-col justify-center items-center'>
        {isError && <h1 className='text-white text-center text-2xl font-light'>{isError}</h1>}
        <LottieAnimation json={DeliveryBoy} divclassName='max-w-[60%]' />
      </div>) : <ProductSection pizzaItem={pizzaItem.filter((item) => item.isTrending === true)} Ingredients={ingredients} />}

    </div>
  )
}

export default TrendingProducts
