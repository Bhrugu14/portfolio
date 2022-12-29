import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Text } from '../text'

export const Header = () => {
    return (
        <div className="flex h-full items-center bg-slate-600 px-4">
            <Text className="font-semibold">Header</Text>
        </div>
    )
}
