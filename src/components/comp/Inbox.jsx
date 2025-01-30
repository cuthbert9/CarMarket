import React, { useEffect,useState } from 'react'
import { App as SendbirdApp, SendBirdProvider } from '@sendbird/uikit-react';
import { GroupChannelList } from '@sendbird/uikit-react/GroupChannelList';
import { GroupChannel } from '@sendbird/uikit-react/GroupChannel';

import '@sendbird/uikit-react/dist/index.css';
import { useUser } from '@clerk/clerk-react';

function Inbox() {
  // const[userID,setUserID]=useState();
  const[channelUrl,setChannelUrl]=useState();

  const AppId=import.meta.env.VITE_SENDBIRD_APP_ID;
  const {user}=useUser();
 const userID=user?.primaryEmailAddress?.emailAddress.split('@')[0];


//  console.log(userIdi);


  // useEffect(()=>{
  //     if(user){
  //       const id=user?.primaryEmailAddress?.emailAddress.split('@')[0];
  //       setUserID(id);
  //       console.log(userID);
  //     }
  // },[user])



  return (
    <div className='h-[100vh] '>    

            <SendBirdProvider appId={AppId}
            userId={userID}
            nickname={user?.fullName}
            profileUrl={user?.imageUrl}
            allowProfileEdit={true} >

            

            <div className="grid grid-cols-3 h-[100vh] gap-2">
              <div className='col-span-1 border'>
            {/* channel List */}
            <GroupChannelList  onChannelSelect={(channel)=>{
              setChannelUrl(channel?.url)            
                } }

                channelListQueryParams={
                  {
                    includeEmpty:true
                  }
                }
            
            />           


              </div>
              <div className='col-span-2 border'>
            {/* Group Channel Channel */}
            <GroupChannel channelUrl={channelUrl}
            />
            
              </div>
            </div>
            </SendBirdProvider>    

      
    </div>
  )
}

export default Inbox