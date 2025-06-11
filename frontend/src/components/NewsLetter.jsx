import React from 'react'

function NewsLetter() {
    const HandelSubmitted=(e)=>{
   e.preventDefault()
    }
  return (
    <div className='text-center '>
        <p className='text-2xl font-bold text-gray-800'>Subscribe NOw and Get 50% off</p>
        <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quos dolore iste, dolorem eaque iure reiciendis numquam fuga</p>
         <form onSubmit={HandelSubmitted} className='w-full sm:1/2 items-center gap-3 mx-auto my-3'>
            <input type="email" placeholder='Enter Your email' required className='py-3 outline-none mx-auto' />
            <button type='submit' className='px-10 py-4 bg-black text-white text-sm hover:opacity-50 cursor-pointer'>Subscribe</button>
         </form>
    </div>
  )
}

export default NewsLetter