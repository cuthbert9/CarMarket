import React from "react";
import Data from "./Data";
import { Link } from "react-router-dom";
import { FaCar } from "react-icons/fa";

function Caterories() {
  return (
    <div className="flex   flex-col items-center    justify-center mt-40">
      <h1 className="text-3xl font-semibold mb-6">Browse By Type</h1>

      <div className="flex w-[90vw] overflow-scroll sm:overflow-hidden md:overflow-scroll ">
        {Data.carCategories?.map((item, index) => (
          
          <Link to={`CategorySearch/${item.category}`}>
          <div  className=" flex flex-col  justify-center items-center m-3  w-30 h-30 border-2 rounded-xl p-4 hover:scale-105 duration-500">
            {/* <img src={item.icon} alt={item.category} /> */}
          <FaCar className="w-6 h-6  sm:w-24 sm:h-24"/>

            <h2>{item.category}</h2>            
          </div>
          
          
          </Link>
          
        ))}
      </div>
    </div>
  );
}

export default Caterories;
