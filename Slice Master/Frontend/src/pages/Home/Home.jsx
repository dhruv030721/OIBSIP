import React from 'react';
import HeroSection from './HeroSection';
import TrendingProducts from './TrendingProducts'
import Suppliers from './Suppliers';

function Home() {

  return (
    <div className=''>
      <HeroSection />
      <TrendingProducts />
      <Suppliers />
    </div>
  );
}

export default Home;
