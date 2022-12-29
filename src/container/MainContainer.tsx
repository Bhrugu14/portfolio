import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components'

const MainContainer = () => {
    return (
        <div className="h- flex h-screen w-screen flex-col overflow-auto bg-white dark:bg-black">
            <div className="fixed z-10 h-24 w-screen">
                <Header />
            </div>
            <div className="h-[calc(100vh-h-24)] pt-24">
                <Outlet />
            </div>
        </div>
    )
}

export default MainContainer
