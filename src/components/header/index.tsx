import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Text } from '../text'
import { useLocation } from 'react-router-dom'
import { MobileMenu } from '../dropdown'

export const Header = () => {
    const { hash } = useLocation()
    console.log({ hash })

    const SelectedStyle =
        'text-xl underline decoration-2 text-orange-700 underline-offset-5'

    return (
        <div className="to-bg-slate-900 flex h-full items-center bg-gradient-to-r from-orange-700 stroke-slate-900 stroke-1 px-4 text-slate-400">
            <div className="flex flex-1">
                <Text
                    className={`cursor-pointer to-emerald-900 text-lg font-semibold`}
                >
                    Portfolio.. or something
                </Text>
            </div>
            <div className="flex  justify-evenly md:hidden">
                <MobileMenu />
            </div>
            <div className="hidden w-1/4 justify-evenly md:flex">
                <a href="#home" className="cursor-pointer">
                    <Text
                        className={`cursor-pointer to-emerald-900 stroke-cyan-500 stroke-1 text-lg font-semibold ${
                            (hash === '' || hash === '#home') && SelectedStyle
                        }`}
                    >
                        Home
                    </Text>
                </a>
                <a href="#skills" className="cursor-pointer">
                    <Text
                        className={`cursor-pointer to-emerald-900 text-lg font-semibold ${
                            hash === '#skills' && SelectedStyle
                        }`}
                    >
                        Skills
                    </Text>
                </a>
                <a href="#projects" className="cursor-pointer">
                    <Text
                        className={`cursor-pointer to-emerald-900 text-lg font-semibold ${
                            hash === '#projects' && SelectedStyle
                        }`}
                    >
                        Experience
                    </Text>
                </a>
                <Text className="cursor-pointer to-emerald-900 text-lg font-semibold">
                    Home
                </Text>
            </div>
        </div>
    )
}
