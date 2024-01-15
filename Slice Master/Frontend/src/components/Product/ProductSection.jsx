import React from 'react'
import Card from './Card'
import Veg from '../../assets/Veg.png'
import NonVeg from '../../assets/NonVeg.png'

function ProductSection({
    pizzaItem,
    className='',
    sectionTitle,
    sectionId,
    sectionIcon,
}) {
    return (
        <section className='px-10 ' id={sectionId}>
            <div className='flex justify-center items-center gap-x-5 drop-shadow-white-4xl'>
                <h2 className='text-white text-5xl font-kaushan text-center my-8 '>{sectionTitle}</h2>
                {sectionIcon}
            </div>
            <div className='grid grid-cols-4 gap-16 py-10'>
                {pizzaItem.map((item) => (
                    <Card key={item.name} img={item.imgUrl} logo={item.category === 'Non Veg Pizza'
                        ? NonVeg
                        : item.category === 'Veg Pizza'
                            ? Veg
                            : null} description={item.description} name={item.name} price={item.price} />
                ))}
            </div>
        </section>
    )
}

export default ProductSection
