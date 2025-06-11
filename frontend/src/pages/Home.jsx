import React from 'react'
import Hero from '../components/Hero'
import Latest from '../components/Latest'
import BestSeler from '../components/BestSeler'
import OurPolicy from '../components/OurPolicy'
import NewsLetter from '../components/NewsLetter'

function Home() {
  return (
    <div className='flex flex-col items-center'>
      <Hero/>
      <Latest/>
      <BestSeler/>
      <OurPolicy/>
      <NewsLetter/>
    </div>
  )
}

export default Home