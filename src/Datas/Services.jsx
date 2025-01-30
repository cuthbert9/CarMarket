import axios from "axios";

const formatData = (data) => {
  let results = [];
  let finalresult = [];

  const  AppId=import.meta.env.VITE_SENDBIRD_APP_ID;

  const SendBirdApiToken=import.meta.env.VITE_SENDBIRD_API_TOKEN;

  data.forEach((item) => {
    const listingID = item?.CarListing?.id;
    if (!results[listingID]) {
      results[listingID] = {
        car: item.CarListing,
        images: [],
      };
    }
    if (item.carImages) {
      results[listingID].images.push(item.carImages);
    }
  });

  results.forEach((item) => {
    finalresult.push({
      ...item.car,
      images: item.images,
    });
  });

  return finalresult;
};



const CreateSendBirdUser=(userId,profileurl,nickName)=>{
   return axios.post('https://api-'+AppId+'.sendbird.com/v3/users',{
     user_id:userId,
     nickname:nickName,
     profile_url:profileurl
   },{
    headers:{
      'Content-Type':'application/json',
      'Api-Token':SendBirdApiToken,
      issue_access_token:false
    }
   });

}


const CreateSendBirdChannel=(users,title)=>{
  return axios.post('https://api-'+AppId+'.sendbird.com/v3/group_channels',{
    user_ids:users,
    name:title,
    is_distinct:true

  },{
    headers:{
      'Content-Type':'application/json',
      'Api-Token':SendBirdApiToken
    }
  })

}


export default {
  formatData,
  CreateSendBirdUser,
  CreateSendBirdChannel
};
