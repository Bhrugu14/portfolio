import { Transition } from '@headlessui/react'
import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import { Text } from '../../components'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { useInView } from 'react-intersection-observer'
import { increment } from '../../store/user'
import IcUserImage from '../../assets/man.png'

const Home = () => {
    const [onHoverReact, setHoverReact] = useState(false)
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: false,
    })

    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()

    const Experience = function diff_years() {
        let dt1 = new Date('August 15, 2020 08:11:00')
        let dt2 = new Date()
        var diff = (dt2.getTime() - dt1.getTime()) / 1000
        diff /= 60 * 60 * 24
        return Math.abs(Math.floor((diff / 365.25) * 10) / 10)
    }

    return (
        <div id="home" className="flex h-full w-full flex-1 flex-col">
            <div className="flex h-full w-full">
                {/* Insert Your Item ! */}
                <Transition
                    className={'h-full w-full'}
                    show={inView}
                    appear={true}
                >
                    <div className="flex h-full w-full ">
                        <Transition.Child
                            className={'h-[calc(100vh-4rem)] w-1/2'}
                            enter="duration-500 delay-100"
                            enterFrom="translate-x-32 opacity-0"
                            enterTo="translate-x-0 opacity-100"
                            leave="transition-opacity duration-150"
                            leaveFrom="translate-x-0 opacity-100"
                            leaveTo="translate-x-0 opacity-100"
                        >
                            <div className="bg-blue flex h-full w-full flex-1 flex-col items-center justify-center bg-slate-900">
                                <div className="flex flex-col">
                                    <Text>
                                        <Transition.Child
                                            className={
                                                'text-6xl text-orange-600 hover:scale-105'
                                            }
                                            enter="duration-500 delay-500"
                                            enterFrom="-translate-y-32 opacity-0"
                                            enterTo="-translate-y-0 opacity-100"
                                            leave="transition-opacity duration-150"
                                            leaveFrom="translate-x-0 opacity-100"
                                            leaveTo="translate-x-0 opacity-100"
                                        >
                                            {'Bhrugu Tundeliya'}
                                        </Transition.Child>
                                    </Text>
                                    <Text className="mt-2">
                                        <Transition.Child
                                            className={
                                                ' text-2xl hover:scale-105 hover:text-orange-700'
                                            }
                                            enter="duration-500 delay-500"
                                            enterFrom="-translate-x-32 opacity-0"
                                            enterTo="-translate-x-0 opacity-100"
                                            leave="transition-opacity duration-150"
                                            leaveFrom="translate-x-0 opacity-100"
                                            leaveTo="translate-x-0 opacity-100"
                                        >
                                            {`React Developer (${Experience()} years)`}
                                        </Transition.Child>
                                    </Text>
                                    <Text className="">
                                        <Transition.Child
                                            className={
                                                'text-2xl hover:scale-105'
                                            }
                                            enter="duration-500 delay-500"
                                            enterFrom="translate-x-32 opacity-0"
                                            enterTo="translate-x-0 opacity-100"
                                            leave="transition-opacity duration-150"
                                            leaveFrom="translate-x-0 opacity-100"
                                            leaveTo="translate-x-0 opacity-100"
                                        >
                                            {`React Native Developer (${Experience()} years)`}
                                        </Transition.Child>
                                    </Text>
                                    <Text className="mt-1">
                                        <Transition.Child
                                            className={
                                                'text-base hover:scale-105'
                                            }
                                            enter="duration-500 delay-500"
                                            enterFrom="translate-y-32 opacity-0"
                                            enterTo="translate-y-0 opacity-100"
                                            leave="transition-opacity duration-150"
                                            leaveFrom="translate-x-0 opacity-100"
                                            leaveTo="translate-x-0 opacity-100"
                                        >
                                            experience in various type of
                                            applications and websites
                                        </Transition.Child>
                                    </Text>
                                </div>
                            </div>
                        </Transition.Child>
                        <Transition.Child
                            className={'h-[calc(100vh-4rem)] w-1/2'}
                            enter="duration-500 delay-100"
                            enterFrom="-translate-x-32 opacity-0"
                            enterTo="-translate-x-0 opacity-100"
                            leave="transition-opacity duration-150"
                            leaveFrom="translate-y-0 opacity-100"
                            leaveTo="translate-y-0 opacity-100"
                        >
                            <div className="bg-blue flex h-full w-full flex-1 flex-col items-center justify-center bg-slate-900">
                                <Transition.Child
                                    className={
                                        'flex h-full w-full items-center justify-center'
                                    }
                                    enter="duration-1000 delay-100"
                                    enterFrom="translate-x-0 scale-0"
                                    enterTo="translate-x-0 scale-1"
                                    leave="transition-opacity duration-150"
                                    leaveFrom="translate-y-0 opacity-100"
                                    leaveTo="translate-y-0 opacity-100"
                                >
                                    <img src={IcUserImage} />
                                </Transition.Child>
                            </div>
                        </Transition.Child>
                    </div>
                </Transition>
            </div>
            <div ref={ref} />
        </div>
    )
}

export default Home
