import React, { useEffect, useState } from "react";
import FormData from "@/Datas/FormData";
import InputField from "./InputField";
import DropDownField from "./DropDownField";
import CarFeatures from "@/Datas/CarFeatures";
import CheckboxInput from "./CheckboxInput";
import { Button } from "./ui/button";
import { db } from "./../db/index";
import { carImages, CarListing } from "./../db/schema";
import ImageUpload from "./ImageUpload";
import { IoIosCloseCircle } from "react-icons/io";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/db/firebaseconfig";
import { ImSpinner3 } from "react-icons/im";
import { toast } from "sonner"
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import moment from "moment/moment";
import { useSearchParams } from "react-router-dom";
import { eq } from "drizzle-orm";
import Services from "@/Datas/Services";


function AddListing() {
 

  const [formData, setFormData] = useState([]);
  const [featuresData, setFeatures] = useState({});
  const[filesSelected,setFilesselected]=useState([]);
  const[editImages,setEditImages]=useState([]);
  const[triggerImageUpload,setTriggerImageUpload]=useState();
  const[loading,setIsLoading]=useState(false);
  const[carDefault,setCarDefault]=useState();
  const[defaultfeatures,setDefaultFeatures]=useState([]);



  const[searchParam]=useSearchParams();   
  const mode=searchParam.get('mode'); 
  const idi=searchParam.get('id');

 
  
  const{user}=useUser();

  const navigate=useNavigate();

  
  const fetchFormData=async()=>{
    const def=await db.select().from(CarListing)
    .leftJoin(carImages,eq(carImages.carListingId,CarListing.id))
    .where(eq(carImages.carListingId,idi))

    const response=Services.formatData(def); 

      setCarDefault(response[0]);
      setFormData(response[0]);
     
  setEditImages(response[0].images);
        
  }
  // console.log(carDefault);
  

  useEffect(()=>{
      if(mode=="edit"){
        fetchFormData();      
             
      }    
  },[mode,idi])

  
  const handleFeaturesChange = (name, value) => {
    setFeatures((Prev) => ({
      ...Prev,
      [name]: value,
    }));
    
  };

  const handleOnChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    setIsLoading(true);
    toast("Please Wait.");
    e.preventDefault();

    if(mode=="edit"){
      

      const result =await db.update(CarListing).set({
        ...formData,
        features: featuresData,
        postedBy:user?.primaryEmailAddress?.emailAddress,
        postedOn:moment().format('DD/MM/YYYY'),
        userName:user?.fullName,
        userImage:user?.imageUrl

      }).where(eq(CarListing.id,idi)).returning({id:CarListing.id});

      if(result){
        console.log("Editing successfully");
        setTriggerImageUpload(result[0].id);
        imageToServer(result[0].id);
        setIsLoading(false);
      navigate('/Profile');

      }
      
      
      

    }else{

      
    try {
      const result = await db.insert(CarListing).values({
        ...formData,
        features: featuresData,
        postedBy:user?.primaryEmailAddress?.emailAddress,
        postedOn:moment().format('DD/MM/YYYY'),
        userName:user?.fullName,
        userImage:user?.imageUrl,
      }).returning({id:CarListing.id});
   

      if (result) {
        console.log("Data saved");     
        setTriggerImageUpload(result[0].id);
        imageToServer(result[0].id);
        setIsLoading(false);
        navigate('/Profile')
      }
    } catch (e) {
      console.log(e.message);
    }



    }
    
  };

  const handleImageRemove=(image)=>{   
      const result=filesSelected.filter((item)=>item!==image);
      setFilesselected(result);
   
  }


  const handleImageEditRemove=async(image,index)=>{

    const result=await db.delete(carImages).where(eq(carImages.id,carDefault.images[index].id));

            const imagesEdited=editImages.filter((img)=>img!==image);
            setEditImages(imagesEdited);
            }
 

  const imageToServer=async(id)=>{
    filesSelected.forEach(file => {
       const fileName=Date.now()+".jpeg";
       const storageRef=ref(storage,'CarMarket/'+fileName);
       const metaData={
        contentType:'image/jpeg'
       }
       uploadBytes(storageRef,file,metaData).then((snapShot)=>{
        console.log("Uploaded The File");
       }) .then(res=>{
        getDownloadURL(storageRef).then(async(downloadUrl)=>{
          console.log(downloadUrl);
       
          await db.insert(carImages).values({
              imageUrl:downloadUrl,
              carListingId:id
          })
        })
       })   

    });

}    


  return (
    <div>
      <div>
        <form action="" className="flex-col border-2 mx-3  my-2">
          <div className="grid grid-cols-1  sm:grid-cols-2 gap-2 m-8 border-2 rounded-lg p-6">
            {FormData?.Data?.carDetails?.map((car, index) =>
              car.fieldType === "text" || car.fieldType === "number" ? (
                <InputField handleOnChange={handleOnChange} car={car} carDefault={carDefault} />
              ) : car.fieldType === "dropdown" ? (
                <DropDownField handleOnChange={handleOnChange} car={car} carDefault={carDefault} />
              ) : car.fieldType === "textarea" ? (
                <div className="flex flex-col">
                  <label htmlFor="">{car.label}</label>
                  <textarea
                    onChange={(e) => handleOnChange(car.name, e.target.value)}
                    car={car}
                    required={car.required}
                    name={car.name}
                    value={carDefault?.[car.name]}                    
                    className="border-2 rounded-lg p-2"
                  />
                </div>
              ) : null
            )}
          </div>

          <div className="flex flex-col   border-2 mx-6 p-5   my-3">
            <div className="self-center  text-3xl  m-3">
              <h1>Features</h1>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ml-6 sm:ml-20">
              {CarFeatures?.carFeatures?.features?.map((feature, index) => (
                <CheckboxInput
                  handleFeaturesChange={handleFeaturesChange}
                  feature={feature}
                  carDefault={carDefault}
                />
              ))}
            </div>
          </div>

          <div className="flex-col  border m-4  rounded-lg p-2  ">
            <div  className="w-full flex justify-center text-xl font-semibold">
            <h2>Upload Car Images</h2>
            </div>

            <div  className="lg:flex  ">
              {
              mode=="edit"&&

            editImages.map((image,index)=>
              <div  key={index} className="m-1 border rounded-3xl w-[300px] h-[200px] ">
                <IoIosCloseCircle className="absolute m-2 text-2xl cursor-pointer" onClick={()=>handleImageEditRemove(image,index)}/>
                
                <img src={image?.imageUrl} alt="PreView" className="rounded-3xl  w-full  h-full   object-cover"/>
              </div>
            )}            
 
              
              
             { 
              filesSelected?.map((image,index)=>
              <div  key={index} className="m-1 border rounded-3xl w-[300px] h-[200px] ">
                <IoIosCloseCircle className="absolute m-2 text-2xl cursor-pointer" onClick={()=>handleImageRemove(image)}/>
                
                <img src={URL.createObjectURL(image)} alt="PreView" className="rounded-3xl  w-full  h-full   object-cover"/>
              </div>
            )

              }
                <ImageUpload filesSelected={filesSelected} setFilesselected={setFilesselected} imageToServer={imageToServer}/>                    
            </div>  
          </div>
          <div className="flex  w-full  justify-end ">
            <button
            disabled={loading}
              type="submit"
              onClick={(e) => onSubmit(e)}
              className="bg-blue-600 p-2 rounded-xl my-2 mx-12" >
             {loading?
             <div className="animate-spin "><ImSpinner3 /></div>
             :"Submit"}
            </button>

            {/* <Button onClick-={(e)=>onSubmit(e)} className="mx-12 my-3">submit</Button> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddListing;
