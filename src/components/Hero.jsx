import React from 'react';
import Search from './Search';

function Hero() {
  return (
    <div  className= 'flex flex-col sm:items-center bg-blue-50  h-[80vh] md:h-[58vh] lg:h-[70vh] xl:h-[80vh] w-full    '  >

        
        <div    className='p-6'>
            <h1 className='text-xl'>  Find Cars for Sale and For Rent Near You</h1>
        </div>
        <div    className='p-3  m-3'>
            <h1 className='text-5xl sm:text-5lg font-bold '>Find Your Dream Car</h1>
        </div>

        <div    className='flex justify-between p-6 bg-white  sm:w-[50vw] md:w-[55vw]   lg:w-[48vw] xl:w-[38vw]   m-4  h-[80px] rounded-3xl text-xl'>
          
            <Search/>
        </div>

        <div className='sm:w-[50vw] md:w-[80vw] lg:w-[50vw] xl:w-[50vw] h-[30vh]  '>

            <img src="/Land2.png" alt="CarImage" />

        </div>
        

            
            
    </div>
  )
}

export default Hero