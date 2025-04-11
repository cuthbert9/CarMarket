import React,{useEffect,useState} from "react";
import Fakedata from "@/Datas/Fakedata";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import CarItem from "./CarItem";
import { db } from "@/db";
import { carImages, CarListing } from "@/db/schema";
import { eq } from "drizzle-orm";
import Services from "@/Datas/Services";
function MostSearched() {
 
  const[mostSearchedList,setMostSearched]=useState();

useEffect(()=>{
  fetchMostSearched();  
},[])

const fetchMostSearched=async()=>{
  const mostSearched=  await db.select().from(CarListing)
    .leftJoin(carImages,eq(carImages.carListingId,CarListing.id))
    .limit(7);

  const resp=Services.formatData(mostSearched);
  setMostSearched(resp);
    

}

// console.log(mostSearchedList);


  return (
    <div className="flex flex-col  items-center  ">
      <h1 className="text-3xl font-bold m-2">Most Searched Cars</h1>
      <div className="flex justify-center ">
        <Carousel >
          <CarouselContent className="w-[80vw] sm:w-[90vw]">
            {mostSearchedList?.map(Car => (
              <CarouselItem className="basis-1/1 sm:basis-1/2 md:basis-1/2 lg:basis-1/4 xl:basis-1/4 2xl:basis-1/5 ">
                <CarItem key={Car.id} car={Car} />
              </CarouselItem>
            ))}
          </CarouselContent >
          <CarouselPrevious /> 
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default MostSearched;
