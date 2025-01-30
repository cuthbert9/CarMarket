import React from 'react'

function Footer() {

  const currentYear=new Date(Date.now()).getFullYear();
 
  return (
    <div>
<footer className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="flex justify-center text-teal-600 sm:justify-start">
       <h1  className='text-3xl font-[cursive]'>Cuthbert.Dev</h1>
      </div>

      <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
        {`Copyright ©; ${currentYear}. All rights reserved.`}
      </p>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer