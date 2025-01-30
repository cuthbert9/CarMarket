import React from 'react'

function Info() {
  return (
    <div>
        <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
      <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
        <div className="mx-auto max-w-md text-center lg:text-left">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Land Rovers</h2>

            <p className="mt-4 text-gray-500 font-semibold">
            Luxury SUVs Combining off-road Capability, Rugged Resign, and Premium Comfort.
            </p>
          </header>          
        </div>
      </div>

      <div className="lg:col-span-2 lg:py-8">
        <ul className="grid grid-cols-2 gap-4">
          <li>
            <a href="#" className="group block">
              <img
                src="https://www.the-landrovers.com/wp-content/uploads/2024/01/Old-Land-Rover-Defender-Restoration-%E2%80%93-The-Landrovers-17-1024x683.jpg"
                alt=""
                className="aspect-square w-full rounded object-cover"
              />        
               
            </a>
          </li>

          <li>
            <a href="#" className="group block">
              <img
                src="https://images.alphacoders.com/891/891740.jpg"
                alt=""
                className="aspect-square w-full rounded object-cover"
              />

              <div className="mt-3">
                
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Info