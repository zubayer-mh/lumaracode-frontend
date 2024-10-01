"use client"

import DashboardNavbar from '@/components/Dashboard/DashboardNavbar'
import DashboardSidebar from '@/components/Dashboard/DashboardSidebar'
import React from 'react'

export default function page() {
    return (
        <div className='grid grid-cols-12' >
            <DashboardSidebar />
            <DashboardNavbar />
        </div>
    )
}
