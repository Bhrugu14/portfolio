import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import ReactGA from 'react-ga'
import { Header } from '../components'

const MainContainer = () => {
    const location = useLocation()

    useEffect(() => {
        // Track page view on route change
        ReactGA.pageview(location.pathname + location.search + location.hash)
    }, [location])

    return (
        <div className="flex h-screen w-screen flex-col overflow-hidden  bg-slate-900">
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
