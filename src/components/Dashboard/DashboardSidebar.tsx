import Image from 'next/image'
import React from 'react'

export default function DashboardSidebar() {
    return (
        <div className='col-span-2 mt-4' >
            <Image src={"/icons/foody.svg"} style={{ margin: "auto" }} height={150} width={150} priority alt='' />
        </div>
    )
}
