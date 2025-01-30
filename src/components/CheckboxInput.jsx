import { Radio } from 'lucide-react'
import React from 'react'

function CheckboxInput({feature,handleFeaturesChange,carDefault}) {
  return (

    <div  className='flex gap-2 items-center'>
      <input onChange={(e)=>handleFeaturesChange(feature.name,e.target.value)} type='checkbox'  checked={carDefault?.features[feature.name]}/>  
      <label htmlFor="">{feature.label}</label>

      
    </div>
  )
}

export default CheckboxInput