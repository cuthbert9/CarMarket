import Header from '@/components/Header'
import Search from '@/components/Search'
import Services from '@/Datas/Services';
import { carImages, CarListing } from '@/db/schema';
import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { db } from './../db/index';
import { eq, lte,and } from 'drizzle-orm';
import CarItem from '@/components/CarItem';



function InputSearch() {


  const [carList, setCarList] = useState([]);

  const [searchParam] = useSearchParams();
  const condition = searchParam.get("condition");
  const carMake = searchParam.get('carMake');
  const pricing= searchParam.get('pricing');

  // console.log(pricing);


  useEffect(() => {
    fetchByInput();
  },[])




  const fetchByInput = async()=>{
    try {
      const result = await db.select()
      .from(CarListing)
      .innerJoin(carImages, eq(carImages.carListingId, CarListing.id))
      .where(
        and(
          condition !== undefined ? eq(CarListing.condition, condition) : true,
          carMake !== undefined ? eq(CarListing.carName, carMake) : true,
          pricing !== undefined ? lte(CarListing.price, pricing) : true
        )
      );


    
        

      
      if (result) {        
        console.log("result Found");
        const response=Services.formatData(result);
        setCarList(response);        
      }
    } catch (e) {
      console.log(e.message);
    }
  }
  return (
    <div>
      <div className='bg-black p-10'>
        <div className='md:mx-40 lg:mx-72 border rounded-2xl my-6 bg-white'>
          <Search />
        </div>      

      </div>

      <h1 className='text-center'>Your Search results </h1>
         <div className='flex m-2 justify-center gap-3 flex-wrap'>
        {carList?.map((item,index)=>
        <CarItem  car={item}/>
        )}
        </div>

    </div>
  )
}

export default InputSearch