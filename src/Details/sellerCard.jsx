import Services from '@/Datas/Services';
import { useUser } from '@clerk/clerk-react';
import React from 'react'
import { IoChatbubbleEllipses } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function SellerCard({ carDetails }) {
  const { user } = useUser();
  const userID = user?.primaryEmailAddress?.emailAddress?.split('@')[0];
  const OwnerID = carDetails?.postedBy?.split('@')[0];

  const navigate=useNavigate();



  // console.log(userID);

  const onMessageOwnerbtnClick =async()=>{
    //creating userID 
    try {
      await Services.CreateSendBirdUser(userID, user?.imageUrl, user?.fullName)
        .then(resp => {
          console.log(resp);
          console.log("user Created ");
        })
    } catch (e) { 
      console.log(e.message);
       }

    //Creating Owners ID 
    try {
      await Services.CreateSendBirdUser(OwnerID, carDetails?.userImage, carDetails?.userName)
        .then(resp => {
          console.log(resp);
          console.log("owner created ");
        })

    } catch (e) {  
      console.log(e.message);
      }
    //Creating the channel
    try {
      await Services.CreateSendBirdChannel([userID, OwnerID], carDetails?.car_name)
        .then(resp => {
          console.log(resp);
          console.log("channel created ");
        navigate('/Profile');

        })
    } catch (e) { 
      console.log(e.message);
       }
  }

  return (
    <div className='p-3  rounded-xl'>
      <div className='flex flex-col items-center'>

        <h1>{carDetails?.userName}</h1>

        {carDetails?.userImage ? (
          <img src={carDetails?.userImage} className='h-[80px] rounded-3xl ' />
        ) : (
          <div className='bg-slate-200  h-[80px] w-[100px] animate-pulse rounded-3xl'>
          </div>
        )
        }

        <h1>{carDetails?.postedBy}</h1>
      </div>
      <button  onClick={onMessageOwnerbtnClick} className="bg-blue-700 p-2 w-full m-1 rounded  hover:scale-105 duration-500 flex items-center gap-2 justify-center">
        Chat with Owner
        <IoChatbubbleEllipses className='text-lg' />
      </button>
    </div>
  )
}

export default SellerCard