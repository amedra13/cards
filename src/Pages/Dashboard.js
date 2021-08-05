import React from 'react'
import '../Components/Sidebar'
import Sidebar from '../Components/Sidebar'
import DashHome from '../Components/DashHome'

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <Sidebar/>
            <DashHome/>
        </div>
    )
}

export default Dashboard
