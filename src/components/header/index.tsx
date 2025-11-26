import { useEffect } from 'react'
import { Text } from '../text'
import { useLocation } from 'react-router-dom'
import { MobileMenu } from '../dropdown'
import IcBT from '../../assets/BT.png'
import useAnalyticsEventTracker from '../../analytics'

export const Header = () => {
    const { hash, pathname } = useLocation()
    const gaEventTracker = useAnalyticsEventTracker('Contact us')

    useEffect(() => {
        if (hash) {
            window.location.href = `/${hash}`
        }
    }, [])

    const SelectedStyle =
        'text-xl underline decoration-2 text-orange-700 underline-offset-5'

    return (
        <div className="to-bg-slate-900 flex h-full items-center bg-transparent from-orange-700 stroke-slate-900 stroke-1 px-4 text-slate-400 md:bg-gradient-to-r">
            <div className="flex flex-1">
                <a href="/" className="hidden md:flex">
                    <img
                        src={IcBT}
                        className={
                            'h-10 w-10 rounded-full object-contain bg-blend-multiply hw-accelerate transition-transform duration-300 hover:scale-110 hover:rotate-12'
                        }
                        alt={'B'}
                    />
                </a>
            </div>
            <div className="z-10  flex justify-evenly md:hidden">
                <MobileMenu />
            </div>
            <div className="hidden justify-evenly md:flex">
                <a
                    href="/#home"
                    onClick={() => gaEventTracker('home')}
                    className="cursor-pointer px-2 transition-all duration-300 hover:scale-105"
                    aria-label="Navigate to Home section"
                >
                    <Text
                        className={`cursor-pointer text-lg font-semibold transition-colors duration-300 ${
                            hash === '#home'
                                ? SelectedStyle
                                : 'hover:text-orange-500'
                        }`}
                    >
                        Home
                    </Text>
                </a>
                <a
                    href="/#skills"
                    onClick={() => gaEventTracker('skills')}
                    className="cursor-pointer px-2 transition-all duration-300 hover:scale-105"
                    aria-label="Navigate to Skills section"
                >
                    <Text
                        className={`cursor-pointer text-lg font-semibold transition-colors duration-300 ${
                            hash === '#skills'
                                ? SelectedStyle
                                : 'hover:text-orange-500'
                        }`}
                    >
                        Skills
                    </Text>
                </a>
                <a
                    href="/#projects"
                    onClick={() => gaEventTracker('projects')}
                    className="cursor-pointer px-2 transition-all duration-300 hover:scale-105"
                    aria-label="Navigate to Experience section"
                >
                    <Text
                        className={`cursor-pointer text-lg font-semibold transition-colors duration-300 ${
                            hash === '#projects'
                                ? SelectedStyle
                                : 'hover:text-orange-500'
                        }`}
                    >
                        Experience
                    </Text>
                </a>
                <a
                    onClick={() => {
                        gaEventTracker('contact')
                    }}
                    href="contact"
                    className="cursor-pointer px-2 transition-all duration-300 hover:scale-105"
                    aria-label="Navigate to Contact page"
                >
                    <Text
                        className={`cursor-pointer text-lg font-semibold transition-colors duration-300 ${
                            pathname.includes('/contact')
                                ? SelectedStyle
                                : 'hover:text-orange-500'
                        }`}
                    >
                        Contact
                    </Text>
                </a>
            </div>
        </div>
    )
}
