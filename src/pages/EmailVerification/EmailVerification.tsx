"use client"

import Spinner from '@/components/shared/Spinner'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function EmailVerification() {
    const [loading, setLoading] = useState<boolean>()
    const [errMessage, setErrMessage] = useState("")
    const router = useRouter()
    const session = useSession()

    useEffect(() => {
        console.log("email ver: ", session)
        if ((session?.data?.user as any)?.verified === "true") {
            router.push("/dashboard")
        }
    }, [session])


    const handleEmailVerification = async (e: any) => {

        try {
            e.preventDefault()
            setLoading(true)
            const otp = e.target.verificationCode.value
            console.log("This is session: ", session)
            const res = await axios.put("https://lumaracode-backend.onrender.com/email-verification", { email: session?.data?.user?.email, otp })

            if (res?.data?.verified) {
                router.push("/dashboard")
            } else {
                setErrMessage("Incorrect Verification Code!")
            }
            setLoading(false)
        } catch (err) {
            setLoading(false)
            setErrMessage("Something Went Wrong!")
            console.log(err)
        }
    }

    return (
        <div className='mt-12 lg:mt-0'>
            <div className='grid grid-cols-1 lg:grid-cols-2' >
                <div className='flex justify-center items-center lg:pl-[60px]' >
                    <div>
                        <div className='mb-[30px]' >
                            <p className='text-[30px] lg:text-[40px] text-[#383d54] font-bold text-center lg:text-start' >Verify Your Email!</p>
                        </div>

                        <div className='mb-[10px]' >
                            <p className='text-[30px] lg:text-[18px] text-[#383d54] font-bold text-center lg:text-start' >Check Your Email!</p>
                        </div>

                        <div>
                            <form onSubmit={handleEmailVerification} className="rounded mb-4 w-[350px]">
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="username">
                                        Verification Code
                                    </label>
                                    <input name='verificationCode' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Verification Code" />
                                </div>
                                <p className='text-red-500 font-semibold mb-1' >{errMessage}</p>
                                <div className="flex items-center justify-between">
                                    <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                        {
                                            loading ?
                                                <Spinner />
                                                :
                                                "Verify"
                                        }
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className='w-[100%]' >
                    <Image src={"/images/signup-page-banner.png"} className='max-h-[100%]' height={2000} width={1000} style={{ height: "100vh", width: "100%" }} alt='' />
                </div>

            </div>
        </div>
    )
}
