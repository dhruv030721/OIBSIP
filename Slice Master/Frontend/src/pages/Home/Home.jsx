import React from 'react';
import HeroSection from './HeroSection';
import TrendingProducts from './TrendingProducts'

function Home() {

  return (
    <>
      <div className='min-h-screen'>
        <HeroSection />
        <TrendingProducts />
        {/* <Suppliers /> */}
      </div>
    </>

  );
}

export default Home;
