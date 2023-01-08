import { Popover, Transition } from '@headlessui/react'
import { Fragment, SVGProps } from 'react'
import { Text } from '../text'

const solutions = [
    {
        name: 'Home',
        description: 'Measure actions your users take',
        href: '/#home',
    },
    {
        name: 'Skills',
        description: 'Create your own targeted content',
        href: '/#skills',
    },
    {
        name: 'Projects',
        description: 'Keep track of your growth',
        href: '/#projects',
    },
    {
        name: 'Contact',
        description: 'Keep track of your growth',
        href: '/contact',
    },
]

export function MobileMenu() {
    return (
        <div className="z-10">
            <Popover className="relative z-30">
                {({ open }) => (
                    <>
                        <Popover.Button
                            className={`
                ${open ? '' : 'text-opacity-90'}
                group inline-flex items-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                            <Menu
                                className={`${open ? '' : 'text-opacity-70'}
                   h-5 w-5 text-orange-300 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                                aria-hidden="true"
                            />
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel
                                className="absolute left-1/2 z-30 mt-1 max-w-sm -translate-x-3/4  transform px-4 sm:px-0 lg:max-w-3xl"
                                style={{ zIndex: 1000 }}
                            >
                                <div className="z-30 overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                    <div className="relative grid gap-5 bg-orange-700 p-5 lg:grid-cols-2">
                                        {solutions.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-orange-300 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                            >
                                                <div className="">
                                                    <Text className="text-sm text-xl font-medium font-bold text-white hover:text-orange-700">
                                                        {item.name}
                                                    </Text>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </div>
    )
}

const Menu = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={`h-6 w-6`}
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
            />
        </svg>
    )
}
