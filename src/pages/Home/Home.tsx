import MidSection from '@/components/Home/MidSection'
import NavBar from '@/components/shared/NavBar'
import React from 'react'

export default function Home() {
  return (
    <div className='bg-[#f4f6fc] h-[100vh]' >
      <div className='max-w-[1000px] m-auto '>
        <NavBar />
        <MidSection />
      </div>
    </div>
  )
}
