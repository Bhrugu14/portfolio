import { Fragment, useEffect, useState } from 'react'
import { Popover, Transition, Switch } from '@headlessui/react'
import { Toggle } from '../switch'

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export const Header = () => {
    const [enabled, setEnabled] = useState(
        localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
    )

    useEffect(() => {
        document.documentElement.classList.toggle('dark')
    }, [enabled])

    return (
        <Popover className="relative bg-white">
            <div className="px-16">
                <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto sm:h-10"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                    </div>
                    <a
                        href="#"
                        className="text-base font-medium text-gray-500 hover:text-gray-900"
                    >
                        Pricing
                    </a>
                    <a
                        href="#"
                        className="text-base font-medium text-gray-500 hover:text-gray-900"
                    >
                        Docs
                    </a>
                    <Toggle enabled={enabled} setEnabled={setEnabled} />
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            ></Transition>
        </Popover>
    )
}
