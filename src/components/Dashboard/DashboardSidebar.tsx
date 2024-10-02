import { getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function DashboardSidebar() {
    const session = useSession()
    console.log("Dash", session)
    return (
        <>
            <div className='col-span-2 mt-4' >
                <Image src={"/icons/foody.svg"} style={{ margin: "auto" }} height={150} width={150} priority alt='' />
                {
                    (session?.data?.user as any)?.verified === "false" && (session?.data?.user as any)?.provider == "credentials"
                    &&
                    <div className='flex flex-col items-center'>
                        <p className='text-red-500 font-bold mb-2' >Email is not Verified!</p>
                        <Link href={"/email-verification"} className='text-white m-auto font-bold px-4 py-2 bg-[#3e54cb] rounded-md mx-2' >Verify email</Link>
                    </div>
                }
            </div>
        </>
    )
}
