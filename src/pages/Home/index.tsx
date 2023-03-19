import { Popover, Transition } from '@headlessui/react'
import { useState } from 'react'
import { Text } from '../../components'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { useInView } from 'react-intersection-observer'
import { TypeAnimation } from 'react-type-animation'
import IcUserImage from '../../assets/man.png'

const Home = () => {
    const [open, setOpen] = useState(false)
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
        // fallbackInView: true,
    })

    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()

    const Experience = function diff_years() {
        let dt1 = new Date('July 15, 2020 08:11:00')
        let dt2 = new Date()
        var diff = (dt2.getTime() - dt1.getTime()) / 1000
        diff /= 60 * 60 * 24
        return Math.abs(Math.floor((diff / 365.25) * 10) / 10)
    }

    return (
        <div id="home" className="flex h-full w-full flex-1 flex-col">
            <div className="flex h-full w-full">
                <div ref={ref} />
                {/* Insert Your Item ! */}
                <Transition
                    className={'h-full w-full'}
                    show={inView}
                    appear={true}
                >
                    <div className="grid h-full w-full sm:grid-cols-1 md:grid-cols-2">
                        <Transition.Child
                            className={'col-span-1 md:h-[calc(100vh-4rem)]'}
                            enter="duration-500 delay-100"
                            enterFrom="translate-x-32 opacity-0"
                            enterTo="translate-x-0 opacity-100"
                            leave="transition-opacity duration-150"
                            leaveFrom="translate-x-0 opacity-100"
                            leaveTo="translate-x-0 opacity-100"
                        >
                            <div className="flex h-full w-full flex-1 flex-col items-center justify-center px-4">
                                <div className="flex flex-col">
                                    <Text className="text-orange-600">
                                        <Transition.Child
                                            className={
                                                'text-3xl hover:scale-105 md:text-6xl'
                                            }
                                            enter="duration-500 delay-500"
                                            enterFrom="-translate-y-32 opacity-0"
                                            enterTo="-translate-y-0 opacity-100"
                                            leave="transition-opacity duration-150"
                                            leaveFrom="-translate-y-0 opacity-100"
                                            leaveTo="-translate-y-0 opacity-100"
                                        >
                                            {'Bhrugu Tundeliya'}
                                        </Transition.Child>
                                    </Text>
                                    <Text className="mt-2 text-slate-400 hover:scale-105 hover:text-react-color">
                                        <Transition.Child
                                            className={
                                                'text-2xl hover:text-react-color'
                                            }
                                            enter="duration-500 delay-500"
                                            enterFrom="-translate-x-32 opacity-0"
                                            enterTo="-translate-x-0 opacity-100"
                                            leave="transition-opacity duration-150"
                                            leaveFrom="-translate-x-0 opacity-100"
                                            leaveTo="-translate-x-0 opacity-100"
                                        >
                                            {`React Developer (${Experience()} years)`}
                                        </Transition.Child>
                                    </Text>
                                    <Text className="text-slate-400 hover:scale-105 hover:text-react-color  ">
                                        <Transition.Child
                                            className={
                                                'text-2xl hover:text-react-color'
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
                                    <Text className="mt-1 text-slate-400">
                                        <Transition.Child
                                            className={'text-base'}
                                            enter="duration-500 delay-500"
                                            enterFrom="translate-y-32 opacity-0"
                                            enterTo="translate-y-0 opacity-100"
                                            leave="transition-opacity duration-150"
                                            leaveFrom="translate-y-0 opacity-100"
                                            leaveTo="translate-y-0 opacity-100"
                                        >
                                            experience in various type of
                                            applications and websites
                                        </Transition.Child>
                                    </Text>
                                </div>
                            </div>
                        </Transition.Child>
                        <Transition.Child
                            className={'md:h-[calc(100vh-4rem)]'}
                            enter="duration-500 delay-100"
                            enterFrom="-translate-x-32 opacity-0"
                            enterTo="-translate-x-0 opacity-100"
                            leave="transition-opacity duration-150"
                            leaveFrom="translate-y-0 opacity-100"
                            leaveTo="translate-y-0 opacity-100"
                        >
                            <div className="relative flex h-full w-full flex-1 flex-col items-center justify-center">
                                <Transition.Child
                                    className={
                                        'flex h-1/2 w-full items-center justify-center md:h-full lg:h-full'
                                    }
                                    enter="duration-1000 delay-100"
                                    enterFrom="translate-x-0 scale-0"
                                    enterTo="translate-x-0 scale-1"
                                    leave="transition-opacity duration-150"
                                    leaveFrom="translate-y-0 opacity-100"
                                    leaveTo="translate-y-0 opacity-100"
                                >
                                    <img
                                        className={`object-contain hover:animate-none ${
                                            open && 'opacity-20'
                                        } sm:h-1/2`}
                                        onMouseEnter={() => setOpen(true)}
                                        // onMouseLeave={() => setOpen(false)}
                                        src={IcUserImage}
                                        alt=""
                                    />
                                    {open && (
                                        // <div className="pointer-events-none absolute w-3/4 md:w-1/2">
                                        //     <label className="text-xl text-slate-400">
                                        <TypeAnimation
                                            className="pointer-events-none absolute w-3/4 text-xl font-bold text-slate-400 md:w-1/2"
                                            sequence={[
                                                'Hello, I am a frontend developer (for now 😉). in my experience, I have been part of teams, done some solo work, built websites from scratch, fixed bugs in existing code, and been part of client communication, design, development and deployment process.',
                                                1000,
                                            ]}
                                            omitDeletionAnimation
                                            speed={75}
                                            wrapper="h2"
                                            repeat={1}
                                        />
                                        // </div>
                                    )}
                                </Transition.Child>
                            </div>
                        </Transition.Child>
                    </div>
                </Transition>
            </div>
        </div>
    )
}

export default Home
