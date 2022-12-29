import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components'

const MainContainer = () => {
    return (
        <div className="h- flex h-screen w-screen flex-col overflow-auto overflow-x-hidden bg-white dark:bg-black">
            <div className="fixed z-10 h-[4rem] w-screen">
                <Header />
            </div>
            <div className="bg-red h-screen w-screen pt-[4rem]">
                <Outlet />
            </div>
        </div>
    )
}

export default MainContainer
