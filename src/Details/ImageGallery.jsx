    import React from 'react'

    function ImageGallery({item}) {

        if(!item ||item.length === 0){
            return <div className='w-full h-full bg-slate-200 animate-pulse flex justify-center items-center rounded-xl'>
                          <h1 className='text-center text-xl   '>Loading The pictures...</h1>
            </div>
        }
    return (

        <div className='rounded-3xl '>
            {/* height-[500vh]   within the image Component */} 
            
            <img src={item[0]?.imageUrl} alt="carImage" className="w-full sm:h-[40vh] lg:h-[50vh] xl:h-[60vh] object-contain sm:object-cover  md:object-contain lg:object-cover xl:object-cover rounded-2xl" />  
            



        </div>
    )
    }

    export default ImageGallery