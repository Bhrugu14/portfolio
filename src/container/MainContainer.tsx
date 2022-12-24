import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components'

const MainContainer = () => {
    return (
        <div className="flex h-screen w-screen flex-col bg-white dark:bg-black">
            <Header />
            <Outlet />
        </div>
    )
}

export default MainContainer
