import React from 'react'
import { SignInButton, useUser,UserButton } from '@clerk/clerk-react'
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';


function Header() {

  const {isSignedIn}=useUser();
  return (
    <div className='flex justify-between    p-5 border-b-2 '>
        <div >  
          <Link to={'/'}>
          <h1  className='text-xl   sm:text-3xl font-bold   text-blue-600'>Cuthbert.Dev</h1>           

          
          </Link>
        </div>
        <div className='hidden   sm:flex   gap-6  text-lg  font-bold  '>
            <h1 className='hover:scale-105 text-primary duration-500'>Home</h1>
            <h1 className='hover:scale-105 text-primary duration-500'>Search</h1>
            <h1 className='hover:scale-105 text-primary duration-500'>New</h1>
            <h1 className='hover:scale-105 text-primary duration-500'>Used</h1>
        </div>
        <div className='flex'>
        <SignInButton mode='modal'>
          {isSignedIn?(
              <UserButton/>

          ):(
            <Button className="mt-3">
            Sign In
        </Button>

          )
            
          }
            
        </SignInButton>
            
            <Link to={'/Profile'}>
                <button className='bg-green-600 text-white m-2 p-2 rounded-lg'>Submit Listing</button>

            </Link>
        


        </div>


    </div>
  )
}

export default Header