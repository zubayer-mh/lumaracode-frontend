import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function MidSection() {
    return (
        <div className='flex items-center mt-8'>
            {/* first part */}
            <div>
                <div className='font-bold text-gray-600'>
                    <div className='text-[40px] text-[#383d54] mb-8' >
                        <p>Empower Your</p>
                        <p>Business With</p>
                        <p>Stunning Design!</p>
                    </div>
                    <p className='mb-8 pr-[70px]'>
                        Lumaracode is a digital design and development studio. We design and develop astonishing websites and mobile apps.
                    </p>
                </div>
                <div>
                    <button className='text-white font-bold px-4 py-2 bg-[#3e54cb] rounded-md mr-4' >Get in touch</button>
                    <Link href={"#"} className='text-gray-600 font-bold'  >See out work</Link>
                </div>
            </div>

            {/* second part */}
            <div className='min-w-[550px]' >
                <Image src={"/images/hero-image.svg"} height={600} width={550} alt=''  />
            </div>
        </div>
    )
}
