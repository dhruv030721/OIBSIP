import React, { useState } from 'react';
import { BgFillButton, RadioButton } from '../index';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../../store/cartSlice'
import toast, { Toaster } from 'react-hot-toast'

function Card({ img, logo, name, description, price, cardKey, Ingredients }) {
  const [steps, setSteps] = useState(0);
  const [crust, setCrustValue] = useState(null);
  const [size, setSizeValue] = useState(null);
  const [topping, setToppingValue] = useState(null);
  const dispatch = useDispatch();

  const AddItemHandler = () => {
    setSteps(0);
    dispatch(addCartItem({name,crust,size,topping,price,img}))
    toast.success("Item Added!", {position: 'bottom-right'})
  };

  const crustValueHandler = (event) => {
    setCrustValue(event.target.value);
    console.log(event.target.value)
  }
  const sizeValueHandler = (event) => {
    setSizeValue(event.target.value);
    console.log(event.target.value)
  }
  const toppingValueHandler = (event) => {
    setToppingValue(event.target.value);
    console.log(event.target.value)
  }


  const stepIncrementHandler = () => {
    if (steps > 3) {
      setSteps(0);
    } else {
      setSteps((prev) => prev + 1);
    }
  };

  const stepDecrementHandler = () => {
    if (steps > 3) {
      setSteps(0);
    } else {
      setSteps((prev) => prev - 1);
    }
  };

  return (
    <div className='flex flex-col font-light bg-black rounded-2xl py-10 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 drop-shadow-white-xl shadow-2xl border-t-orange-500 border-b-orange-500 border-2 border-x-transparent pb-5 text-white hover:-translate-y-3 transition-all h-[500px] min-w-[100%] pt-3'>
      {/* Img */}
      {steps === 0 && (
        <>
          <div className='w-full h-[40%] rounded-xl -z-20'>
            <img src={img} alt="Farm House" className='drop-shadow-3xl w-full h-full px-1 mix-blend-color-burn rounded-xl -z-10 object-contain' />
          </div>
          <h1 className='text-xl text-center font-kaushan h-[10%]'>{name}</h1>
          <div className='flex items-center justify-between p-5 h-[10%]'>
            {/* CategoryLogo */}
            {logo ? (
              <>
                <h1 className='text-orange-500 inline text-lg font-bold'>&#8377; {price.regular}</h1>
                {/* Price */}
                <img src={logo} alt="" className='w-[10%]' />
              </>
            ) : (
              <h1 className='text-orange-500 text-start inline text-lg font-bold'>&#8377; {price.regular}</h1>
            )}
          </div>
          {/* PizzaIngredients */}
          <div className='h-[20%]'>
            <p className='text-[0.8rem] font-light px-4'>{description}</p>
          </div>
          {/* Order button */}
          <button className='mx-auto px-6 py-2.5 mt-10 text-sm h-[10%] border-orange-600 rounded-2xl text-orange-500 font-black bg-transparent shadow-3xl drop-shadow-3xl hover:scale-105 transition-all backdrop-filter backdrop-blur-sm before:bg-orange-500 before:absolute before:w-0 before:h-0 before:top-0 hover:text-black before:left-0 z-0 before:-z-10 before:rounded-xl hover:before:w-full hover:before:h-full before:transition-all hover:before:transition-all border-y-2' onClick={stepIncrementHandler}>
            Add to Cart
          </button>
        </>
      )}

      {steps === 1 && (
        <>
          <div className='w-full flex flex-col justify-around h-full '>
            <h2 className='text-2xl text-center'>Crust</h2>
            <p className='ml-4 my-5'>• Select any 1 : </p>
            <div className=' px-5 overflow-y-auto'>
              <form className='grid grid-cols-1 gap-4 overflow-y-auto'>
                {Ingredients.filter((item) => item.category === "Crust").map((item) => (
                  <RadioButton key={item.name} name={item.name}
                    radioName={cardKey} onChange={crustValueHandler} />
                ))}
              </form>
            </div>
            <div className='flex justify-center space-x-3' >
              <BgFillButton btnName="Prev" onClick={stepDecrementHandler} />
              <BgFillButton btnName="Next" type="submit" onClick={stepIncrementHandler} />
            </div>
          </div>
        </>
      )}

      {steps === 2 && (
        <>
          <div className='w-full flex flex-col justify-around h-full '>
            <h2 className='text-2xl text-center'>Size</h2>
            <p className='ml-4 my-5'>• Select Size : </p>
            <div className='grid grid-cols-1 gap-4 px-5'>
              <form className='grid grid-cols-1 gap-4 '>
                <RadioButton name={"Regular"} radioName={cardKey} price={price.regular} onChange={sizeValueHandler} />
                <RadioButton name={"Medium"} radioName={cardKey} price={price.medium} onChange={sizeValueHandler} />
                <RadioButton name={"Large"} radioName={cardKey} price={price.large} onChange={sizeValueHandler} />
              </form>
            </div>
            <div className='flex justify-center space-x-3' >
              <BgFillButton btnName="Prev" onClick={stepDecrementHandler} />
              <BgFillButton btnName="Next" type="submit" onClick={stepIncrementHandler} />
            </div>
          </div>
        </>
      )}

      {steps === 3 && (
        <>
          <div className='w-full flex flex-col justify-around h-full '>
            <h2 className='text-2xl text-center'>Topping</h2>
            <p className='ml-4 my-5'>• Select Topping : </p>
            <div className='px-5 overflow-y-auto'>
              <form className='grid grid-cols-1 gap-4'>
                {Ingredients.filter((item) => item.category === "Topping").map((item) => (
                  <RadioButton key={item.name} name={item.name}
                    radioName={cardKey} onChange={toppingValueHandler} price={item.price} />
                ))}
              </form>
            </div>
            <div className='flex justify-center space-x-3' >
              <BgFillButton btnName="Prev" onClick={stepDecrementHandler} />
              <BgFillButton btnName="Add" onClick={AddItemHandler} />
            </div>
          </div>
        </>
      )}

    </div>
  );
}

export default Card;
