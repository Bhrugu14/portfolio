import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components'

const MainContainer = () => {
    return (
        <div className="flex h-full w-screen flex-col overflow-x-hidden bg-slate-900">
            <div className="fixed z-10 h-[4rem] w-screen">
                <Header />
            </div>
            <div className="scroll custom_scroll_bar mt-[5rem] h-full min-h-[calc(100vh-4rem)] w-screen overflow-x-hidden scroll-smooth">
                <Outlet />
            </div>
        </div>
    )
}

export default MainContainer
