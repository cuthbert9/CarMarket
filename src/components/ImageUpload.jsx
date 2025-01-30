import { storage } from "@/db/firebaseconfig";
import { ref, uploadBytes } from "firebase/storage";
import React,{useEffect, useState} from "react";
import { IoIosAddCircle } from "react-icons/io";



function ImageUpload({setFilesselected,filesSelected,imageToServer}) {


    const handleFiles=(event)=>{
        const files=event.target.files;       
     
        for(let x=0;x<files.length;x++){

             const file=files[x];
             setFilesselected((Prev)=>([...Prev,file]));     
        }        

     }   



  return (
    <div className="flex-col justify-center  items-center  m-3  w-[300px] h-[200px] ">
      <div className="flex justify-center  items-center h-full rounded-3xl bg-blue-200 hover:shadow-lg cursor-pointer">
        <label htmlFor="ImageUpload">
          <IoIosAddCircle className="text-4xl   cursor-pointer " />
        </label>
      </div>
      <input
        type="file"
        multiple={true}
        id="ImageUpload"
        className="opacity-0"
        onChange={handleFiles}
      />

      
    </div>
  );
}

export default ImageUpload;
