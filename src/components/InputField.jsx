import { Input } from 'postcss'
import React from 'react'


function InputField({car,handleOnChange,carDefault}) {

  const test=car.name;
  return (
    <> 
    
      <div className='flex flex-col ' >
       
       <label htmlFor="">{car.label}<span className='text-red-700'>{car.required?"*":""}</span></label>
       <input onChange={(e)=>handleOnChange(car.name,e.target.value)} type={car.fieldType} defaultValue={carDefault?.[car.name]} placeholder='enter' name={car.name} required={car.required} className='border-2 p-1 rounded-lg'/>

   </div>
    
    </>
  
  )
}

export default InputField