import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components'
import Experience from '../pages/Experience'
import Home from '../pages/Home'
import Skills from '../pages/Skills'

const MainContainer = () => {
    return (
        <div className="h- flex h-screen w-screen flex-col overflow-hidden  bg-slate-900">
            <div className="fixed z-10 h-[4rem] w-screen">
                <Header />
            </div>
            <div className="scroll custom_scroll_bar mt-[4rem]  h-[calc(100vh-4rem)]  w-screen overflow-x-hidden scroll-smooth">
                <Home />
                <Skills />
                <Experience />
            </div>
        </div>
    )
}

export default MainContainer
