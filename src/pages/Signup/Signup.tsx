"use client"

import SocialAuth from '@/components/shared/SocialAuth'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function Signup() {
    const session = useSession()
    const router = useRouter()

    // useEffect(() => {
    //     if (session.data?.user) {
    //         router.push("/dashboard")
    //     }
    // }, [session])


    const credentialHandler = async (e: any) => {
        try {
            e.preventDefault()
            const email = e.target.email.value
            const password = e.target.password.value
            const test = await signIn("credentials", { email, password, redirect: false })
            router.push("/email-verification")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='mt-12 lg:mt-0'>
            <div className='grid grid-cols-1 lg:grid-cols-2' >
                <div className='flex justify-center items-center lg:pl-[60px]' >
                    <div>
                        <div className='mb-[30px]' >
                            <p className='text-[30px] lg:text-[40px] text-[#383d54] font-bold text-center lg:text-start' >Create Your Account!</p>
                        </div>
                        <div className='flex justify-center lg:block'>
                            <form onSubmit={credentialHandler} className="rounded mb-4 w-[350px]">
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                        Email
                                    </label>
                                    <input name='email' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Email" />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                        Password
                                    </label>
                                    <input name='password' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="********" />
                                    {/* <p className="text-red-500 text-xs italic">Email or Password is incorrect!</p> */}
                                </div>
                                <div className="flex items-center justify-between">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                        Sign Up
                                    </button>
                                </div>
                                <div className='mt-2'>
                                    <span>Already have an account?</span>
                                    <Link href={"/login"} className='text-blue-500 hover:text-blue-800 font-bold' > Login</Link>
                                </div>
                            </form>
                        </div>

                        <div className='mb-[20px] w-[350px]' >
                            <p className='text-[20px] text-[#383d54] font-bold text-center' >Or</p>
                        </div>

                        <div className='flex justify-center lg:block' >
                            <div>
                                <SocialAuth />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[100%] hidden lg:block' >
                    <Image src={"/images/signup-page-banner.svg"} className='max-h-[100%]' height={0} width={0} style={{ height: "100vh", width: "100%" }} alt='' />
                </div>
            </div>
        </div>
    )
}
