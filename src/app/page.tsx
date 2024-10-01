import MidSection from '@/components/Home/MidSection'
import NavBar from '@/components/NavBar'
import React from 'react'

export default function page() {
  return (
    <div className='bg-[#f4f6fc] h-[100vh]' >
      <div className='max-w-[1000px] m-auto '>
        <NavBar />
        <MidSection />
      </div>
    </div>
  )
}

