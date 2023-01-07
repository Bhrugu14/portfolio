import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components'
import Contact from '../pages/Contact'

const MainContainer = () => {
    return (
        <div className="h- flex h-screen w-screen flex-col overflow-hidden  bg-slate-900">
            <div className="fixed z-10 h-[4rem] w-screen">
                <Header />
            </div>
            <div className="scroll custom_scroll_bar mt-[4rem]  h-[calc(100vh-4rem)]  w-screen overflow-x-hidden scroll-smooth">
                <Outlet />
            </div>
        </div>
    )
}

export default MainContainer
