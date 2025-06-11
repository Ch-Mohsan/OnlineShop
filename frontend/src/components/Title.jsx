import React from 'react'

function Title({text1,text2}) {
  return (
    <div className='flex items-center'>
        <p className='text-3xl text-gray-500'>{text1} <span className='font-medium text-gray-700'>{text2}</span> </p>
        <p className='w-8 sm:w-12 h-1  mt-1 bg-gray-500'></p>
    </div>
  )
}

export default Title