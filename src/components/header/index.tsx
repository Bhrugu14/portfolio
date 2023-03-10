import { Fragment, useEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Text } from '../text'
import { useLocation, useNavigate } from 'react-router-dom'
import { MobileMenu } from '../dropdown'
import useAnalyticsEventTracker from '../../analytics'

export const Header = () => {
    const { hash, pathname } = useLocation()
    const navigate = useNavigate()
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
                <Text
                    className={`hidden cursor-pointer to-emerald-900 text-lg font-semibold  md:flex`}
                >
                    Frontend Dev
                </Text>
            </div>
            <div className="z-10  flex justify-evenly md:hidden">
                <MobileMenu />
            </div>
            <div className="hidden w-1/4 justify-evenly md:flex">
                <a
                    href="/#home"
                    onClick={() => gaEventTracker('home')}
                    className="cursor-pointer"
                >
                    <Text
                        className={`cursor-pointer to-emerald-900 stroke-cyan-500 stroke-1 text-lg font-semibold ${
                            hash === '#home' && SelectedStyle
                        }`}
                    >
                        Home
                    </Text>
                </a>
                <a
                    href="/#skills"
                    onClick={() => gaEventTracker('skills')}
                    className="cursor-pointer"
                >
                    <Text
                        className={`cursor-pointer to-emerald-900 text-lg font-semibold ${
                            hash === '#skills' && SelectedStyle
                        }`}
                    >
                        Skills
                    </Text>
                </a>
                <a
                    href="/#projects"
                    onClick={() => gaEventTracker('projects')}
                    className="cursor-pointer"
                >
                    <Text
                        className={`cursor-pointer to-emerald-900 text-lg font-semibold ${
                            hash === '#projects' && SelectedStyle
                        }`}
                    >
                        Experience
                    </Text>
                </a>
                <a
                    onClick={() => {
                        gaEventTracker('contact')
                        navigate('/contact')
                    }}
                    className="cursor-pointer"
                >
                    <Text
                        className={`cursor-pointer to-emerald-900 text-lg font-semibold ${
                            pathname.includes('/contact') && SelectedStyle
                        }`}
                    >
                        Contact
                    </Text>
                </a>
            </div>
        </div>
    )
}
