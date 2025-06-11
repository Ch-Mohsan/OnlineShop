import React from 'react'

function Hero() {
  return (
    <div className=' w-full flex flex-col sm:flex-row justify-center  py-3 sm:h-[450px]  '>
     
     <div className=' w-full  sm:w-[40%]  border-[1px] border-black  flex flex-col justify-center items-center border-r-0 gap-3 py-10 '>
      <div className="flex items-center gap-0.5"><p className='w-8 sm:w-13 rounded-md h-1 bg-gray-500'></p>
      <p className='text-gray-500 '>OUR BESTSELER</p></div>
      <h1 className='text-gray-500 text-3xl sm:text-5xl'>Latest Arrivals</h1>
      <div className='flex items-center justify-center gap-0.5'>
        <p className="text-gray-500">Shop Now</p>
        <p className="bg-gray-500 w-8 sm:w-13 h-1 rounded-md mt-0.5"></p>
      </div>
     </div>
     <div className=' w-full sm:w-1/2 h-full'>
     <img src="/hero_img.png" alt="" className='h-full' />
     </div>
    </div>
  )
}

export default Hero