import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"


function DropDownField({car,handleOnChange,carDefault}) {
  return (
    <div className='  '>
        <label htmlFor="">{car.label}</label>
         <Select   onValueChange={(value)=>handleOnChange(car.name,value)} 
          required={car.required}
          defaultValue={carDefault?.[car.name]}>
            <SelectTrigger className="w-full border-none ">

                <SelectValue placeholder={carDefault?.[car.name]?carDefault?.[car.name]:car.name} />
            </SelectTrigger>
            <SelectContent className="" >
                {car.options.map((opt,index)=>
                    <SelectItem value={opt}>{opt}</SelectItem>
                )}
                
                
            </SelectContent>
            </Select>
    </div>
  )
}

export default DropDownField