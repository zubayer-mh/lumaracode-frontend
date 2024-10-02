import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function DashboardNavbar() {
    const session = useSession()
    const router = useRouter()
    const handleLogout = () => {
        signOut({ redirect: false })
        router.push("/")
    }
    useEffect(() => {
        if (session.status === "unauthenticated") {
            router.push("/")
        }
        console.log(session)
    }, [session])

    return (
        <div className='col-span-10 flex items-center bg-[#f2f5f7]'>
            <form className='flex items-center grow mx-3 bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight'>
                <input type="text" name="" id="" className='grow outline-none' />
                <div className='flex items-center' >
                    <Image src={"/icons/search.svg"} height={25} width={25} alt='' />
                </div>
            </form>

            <div className="rounded-full h-[45px] w-[45px] overflow-hidden" >
                <Image src={session.data?.user?.image || "/images/me.jpg"} width={50} height={50} alt='' />
            </div>
            <div>
                <button onClick={handleLogout} className='text-white font-bold px-4 py-2 bg-[#3e54cb] rounded-md mx-2' >Logout</button>
            </div>
        </div>
    )
}
