import React from 'react'
import Header from './Header';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MyListing from './comp/MyListing';
import Inbox from './comp/Inbox';
import MyProfile from './comp/MyProfile';


function Profile() {
  return (
    <>
    <div  className='my-2 mx-6 '>
    <Tabs defaultValue="MyListing" className="w-full">
  <TabsList className='flex justify-start w-full'>
    <TabsTrigger value="MyListing">My Listing</TabsTrigger>
    <TabsTrigger value="Inbox">Inbox
    </TabsTrigger>
    <TabsTrigger value="Profile">Profile</TabsTrigger>
  </TabsList>
  <TabsContent value="MyListing">
    <MyListing/>
  </TabsContent>
  <TabsContent value="Inbox">
    <Inbox/>
  </TabsContent>
  <TabsContent value="Profile">
    <MyProfile/>
  </TabsContent>
</Tabs>        


    </div>
   
    
    
    
    
    </>
  )
}

export default Profile