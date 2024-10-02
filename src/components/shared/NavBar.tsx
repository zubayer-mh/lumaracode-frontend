"use client"

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function NavBar() {
    const session = useSession()
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        if (pathname === "/" && session.data) {
            router.push("/dashboard")
        }
    }, [session])

    return (
        <div className='flex items-center justify-between pt-12 ' >
            {/* logo */}
            <div>
                <Image height={62} width={62} src="/icons/logo.svg" alt='' ></Image>
            </div>

            {/* navigaton to other pages */}
            <div className='font-bold text-gray-600' >
                <ul className='flex'>
                    <li className='px-8' ><Link href={"#"} >Home</Link></li>
                    <li className='px-8' ><Link href={"#"} >Projects</Link></li>
                    <li className='px-8' ><Link href={"#"} >Services</Link></li>
                </ul>
            </div>

            {/* Contact Us button */}
            <div>
                <button className='text-white font-bold px-4 py-2 bg-[#3e54cb] rounded-md mr-4' >
                    <Link href={"#"} >Contact Us</Link>
                </button>
                <button className='text-white font-bold px-4 py-2 bg-[#3e54cb] rounded-md' >
                    <Link href={"/sign-up"} >Sign Up / Login</Link>
                </button>
            </div>
        </div>
    )
}
