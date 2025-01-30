import { useState, useEffect } from 'react';
import { db } from '@/db';
import { carImages, CarListing } from '@/db/schema';
import React from 'react'
import { useParams } from 'react-router-dom'
import { eq } from 'drizzle-orm';
import Services from '@/Datas/Services';
import CarItem from '@/components/CarItem';


function CategorySearch() {

    const [carList, setCarList] = useState([]);
    const { category } = useParams();

    // console.log(category);

    useEffect(() => {
        fetchCategory(category);
    }, [])


    const fetchCategory = async (cat) => {

        try {
            const result = await db.select()
                .from(CarListing)
                .innerJoin(carImages, (eq(carImages.carListingId, CarListing.id)))
                .where(eq(CarListing.category, category));

            if (result) {
                const response = Services.formatData(result);
                // console.log(response[0]); 

                setCarList(response);
                // // console.log(carList) ;      

            }


        } catch (e) {
            console.log(e.message);
        }

    }

    console.log(carList);


    return (
        <div className='m-3 '>
            <h1 className='text-2xl text-center '><span className='text-lg font-light'>Search results For</span>   {category}</h1>

            <div className='flex  gap-2 flex-wrap  justify-center  '>

              

                {carList.length < 1 ?
                    [1, 2, 3, 3].map(
                        item =>
                            <div className='w-[270px] h-[300px] bg-blue-200 animate-pulse rounded-2xl border'>
                            </div>
                    ) : carList?.map((item, index) =>
                    (<div key={item.id} className=''>
                        <CarItem car={item} />

                    </div>))


                }


                


            </div>
            
            {carList.length<1?
                <div className='text-center '>
                    <h1>Finding Cars data....    </h1>
                </div>:null
                }
        </div>
    )
}

export default CategorySearch