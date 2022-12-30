import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Text } from '../text'

export const Header = () => {
    return (
        <div className="flex h-full items-center bg-slate-600 px-4">
            <div className="flex flex-1">
                <Text className="font-semibold">Portfolio.. or something</Text>
            </div>
            <div className="flex w-1/4 justify-around">
                <a href="#home" className="cursor-pointer">
                    <Text className="cursor-pointer font-semibold">Home</Text>
                </a>
                <a href="#projects">
                    <Text className="font-semibold">Projects</Text>
                </a>
                <Text className="font-semibold">Home</Text>
                <Text className="font-semibold">Home</Text>
            </div>
        </div>
    )
}
