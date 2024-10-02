"use client"

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function ChechAuth() {
    const session = useSession()
    const router = useRouter()

    if (session.status === "unauthenticated") {
        router.push("/login")
    }
    
    return (
        <div></div>
    )
}
