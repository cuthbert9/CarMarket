import React from "react";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GiGearStickPattern } from "react-icons/gi";
import { SlSpeedometer } from "react-icons/sl";
import { Separator } from "@radix-ui/react-select";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


function CarItem({ car }) {
  return (
    <div className="border-2 my-2 rounded-2xl ">
      <div className="flex flex-col items-center ">
        <div className="h-[200px] w-[270px]">
          <img src={car.images[0]?.imageUrl} alt={car.image} className="w-full h-full  object-cover rounded-t-xl" />
        </div>

        <div>
          <h1 className="text-lg font-semibold my-2">{car.carName}</h1>
        </div>
        <Separator  className="w-[200px] border"/>

        <div className="flex  items-center  my-2">
          <div className="flex flex-col items-center mx-1 ">
            <BsFillFuelPumpFill className="text-2xl"/>
            <h1 className="text-sm">{car.fuelType}</h1>
          </div>
          <div className="flex flex-col items-center mx-1">
            <GiGearStickPattern className="text-2xl" />
            <h1 className="text-sm">{car.transmission}</h1>
          </div>

          <div className="flex  flex-col items-center     ">
            <SlSpeedometer className="text-2xl"/>
            <h2 className="text-sm">{car.mileage}</h2>
          </div>
        </div>
        <Separator  className="w-[200px] border"/>
        {/* <Separator orientation="horizontal" className="w-[200px]"/> */}


        <div    className="flex justify-center  gap-3 my-2">
           <h1>${car.price}</h1>
           <div className="flex  gap-1  text-green-600  cursor-pointer">
            <div> 
              <Link to={`/CarDetails/?id=${car.id}`}>
           <h1>View more </h1> 
              
              </Link>            
            </div>
            <div  className="my-1">
           <FaExternalLinkAlt />
            </div>           

            </div> 
        </div>
      </div>
    </div>
  );
}

export default CarItem;
