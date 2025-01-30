import React,{useEffect,useState} from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { CiSearch } from "react-icons/ci";
  import { Separator } from "@/components/ui/separator"

  import Data from './Data.jsx';
import { Link } from 'react-router-dom';

  

function Search() {  
    
    const[condition,setCondition]=useState(null);
    const[carMake,setCarMake]=useState(null);
    const[pricing,setPricing]=useState(null);
   

    
  return (
    <div className=' flex items-center font-semibold  p-5 '>

        <Select onValueChange={(value)=>setCondition(value)}>
            <SelectTrigger className="w-[80px] sm:w-[180px] md:w-[100px]  lg:w-[140px] border-none ">
                <SelectValue placeholder="Car" />
            </SelectTrigger>
            <SelectContent  className="">
                <SelectItem value="New">New</SelectItem>
                <SelectItem value="Used">Used</SelectItem>
            </SelectContent>
         </Select>
            <Separator className="h-10" orientation="vertical"/>


             <Select onValueChange={(value)=>setCarMake(value)}>
            <SelectTrigger className="w-[80px] sm:w-[180px] md:w-[100px] lg:w-[140px] border-none outline-none">
                <SelectValue placeholder="Car  Make" />
            </SelectTrigger>
            <SelectContent>
                {Data.CarMaker?.map((item,index)=>
                 <SelectItem value={item.Make}>{item.Make}</SelectItem>
                
                )}              
               
            </SelectContent>
            </Select>
            <Separator className="h-10" orientation="vertical"/>

            <Select onValueChange={(value)=>setPricing(value)}>
            <SelectTrigger className="w-[80px] sm:w-[180px] md:w-[100px]  lg:w-[140px]border-none">
                <SelectValue placeholder="Pricing" />
            </SelectTrigger>
            <SelectContent>
                {Data.CarPricing?.map((item,index)=>
                 <SelectItem value={item.Make}>{item.Make}</SelectItem>
                )                }              
            </SelectContent>
            </Select> 
            <Separator className="h-10" orientation="vertical"/>

            <Link to={`InputSearch?condition=${condition}&carMake=${carMake}&pricing=${pricing}`}>

            <div    className='m-2  bg-blue-500 text-3xl p-1 rounded-3xl hover:scale-105  duration-500   cursor-pointer'   >
                <CiSearch className='text-white'/>
            </div> 
            
            </Link>
          
   

    </div>
  )
}

export default Search