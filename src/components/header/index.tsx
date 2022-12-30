import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Text } from '../text'

export const Header = () => {
    return (
        <div className="flex h-full items-center bg-slate-600 px-4">
            <div className="flex flex-1">
                <Text className="font-semibold">Portfolio.. or something</Text>
            </div>
            <div className="flex w-1/4 justify-evenly">
                <a href="#home" className="cursor-pointer text-orange-800">
                    <Text className="cursor-pointer font-semibold text-orange-700 ">
                        Home
                    </Text>
                </a>
                <a href="#projects" className="cursor-pointer">
                    <Text className="cursor-pointer font-semibold text-orange-700">
                        Projects
                    </Text>
                </a>
                <Text className="font-semibold">Home</Text>
                <Text className="font-semibold">Home</Text>
            </div>
        </div>
    )
}
