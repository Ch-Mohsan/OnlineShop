import React from 'react'

function OurPolicy() {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-6 text-center py-4' >
        <div>
            <img src="src\assets\frontend_images\exchange_icon.png" alt="" className='w-12 m-auto mb-5' />
            <p className='font-semibold'>Easy Eschange Policy </p>
            <p className='text-gray-400 text-sm'>We Provide hassle free exchange policy </p>
        </div>
        <div>
            <img src="src\assets\frontend_images\exchange_icon.png" alt="" className='w-12 m-auto mb-5' />
            <p className='font-semibold'>Easy Eschange Policy </p>
            <p className='text-gray-400 text-sm'>We Provide hassle free exchange policy </p>
        </div>
        <div>
            <img src="src\assets\frontend_images\support_img.png" alt="" className='w-12 m-auto mb-5' />
            <p className='font-semibold'>Best Customer Support </p>
            <p className='text-gray-400 text-sm'>We Provide 24/7 best customer support </p>
        </div>
    </div>
  )
}

export default OurPolicy