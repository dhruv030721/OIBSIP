import React, { useEffect, useState } from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useSelector } from 'react-redux';
import { LottieAnimation, ProductSection } from '../../components/index.js'
import DeliveryBoy from '../../assets/jsons/deliveryboy.json'
import { CiPizza } from "react-icons/ci";
import { GiBeerBottle } from "react-icons/gi";


function OurMenu() {

  const categories = [
    {
      name: "Veg Pizza",
      anchorLink: "#vegpizza"
    },
    {
      name: "Non Veg Pizza",
      anchorLink: "#nonvegpizza"
    },
    {
      name: "Beverages",
      anchorLink: "#beverages"
    },
  ];
  const [pizzaItem, setPizzaItem] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(null);
  const items = useSelector((state) => state.product.items);
  const error = useSelector((state) => state.error.dataError);

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
    <div className='bg-bg-gray pt-[8vh] font-poppins text-sm before:bg-pizza-background before:h-[100%] before:w-full before:fixed before:opacity-20'>
      {/* Navigation Bar */}
      <nav className='h-[6vh] bg-bg-gray border-b-2 border-orange-500 rounded-b-full font-black fixed flex justify-around w-full  z-10 items-center bg-transparent bg-clip-padding backdrop-filter backdrop-blur-sm before:bg-black before:absolute before:w-full before:h-full before:opacity-70 before:-z-10 text-white before:rounded-b-full' >
        {
          categories.map((item) => (
            <AnchorLink key={item.name} href={item.anchorLink} className='relative hover:scale-110 transition-all hover:transition-all outline-none before:bg-orange-500 before:absolute before:w-0 hover:before:transition-all before:bottom-7 before:left-0 before:h-0.5 hover:before:w-full'>
              {item.name}
            </AnchorLink>
          ))
        }
      </nav>

      {/* Items */}

      {/* Category Banner */}
      {isLoading ? (<div className='bg-bg-gray pt-[8vh] font-poppins text-lg h-screen flex flex-col justify-center items-center'>
        {isError && <h1 className='text-white text-center text-2xl'>{isError}</h1>}
        <LottieAnimation json={DeliveryBoy} divclassName='w-[30%]' />
      </div>) : (<div className='mt-20'>
        <ProductSection pizzaItem={pizzaItem.filter((item) => item.category === "Veg Pizza")} sectionTitle="Veg Pizza" sectionIcon={<CiPizza size={50} color='green' className='animate-bounce' />} sectionId="vegpizza" isSection="true" />
        <ProductSection pizzaItem={pizzaItem.filter((item) => item.category === "Non Veg Pizza")} sectionTitle="Non Veg Pizza" sectionIcon={<CiPizza size={50} color='red' className='animate-bounce' />} sectionId="nonvegpizza" isSection="true" />
        <ProductSection pizzaItem={pizzaItem.filter((item) => item.category === "Beverages")} sectionTitle="Beverages" sectionIcon={<GiBeerBottle size={50} color='violet' className='animate-bounce' />} sectionId="beverages" isSection="true" />
      </div>
      )}
    </div >
  );
}

export default OurMenu
