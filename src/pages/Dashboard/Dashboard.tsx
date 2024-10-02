import DashboardNavbar from '@/components/Dashboard/DashboardNavbar'
import DashboardSidebar from '@/components/Dashboard/DashboardSidebar'
import React from 'react'

export default function Dashboard() {
    return (
        <div className='grid grid-cols-12 h-[100vh]' >
            <DashboardSidebar />
            <DashboardNavbar />
        </div>
    )
}
