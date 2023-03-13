import React from 'react'
import { Switch } from '@headlessui/react'
import ic_sun from '../../assets/sunny.png'
import ic_moon from '../../assets/half-moon.png'

interface ToggleProps {
    enabled: boolean
    setEnabled: (i: boolean) => void
}

export const Toggle = ({ enabled, setEnabled }: ToggleProps) => {
    return (
        <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
                enabled ? 'bg-blue-600' : 'bg-gray-200'
            } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
            {({ checked }) => (
                /* Use the `checked` state to conditionally style the button. */
                <button
                    className={`relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                    <span className="sr-only">Enable notifications</span>
                    <span
                        className={`${
                            checked ? 'translate-x-6' : '-translate-x-1'
                        } inline-block h-6 w-6 transform rounded-full bg-white transition`}
                    >
                        <img src={checked ? ic_sun : ic_moon} alt={'switch'} />
                    </span>
                </button>
            )}
        </Switch>
    )
}
