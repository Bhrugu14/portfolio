import { Transition } from '@headlessui/react'
import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import { Text } from '../../components'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { useInView } from 'react-intersection-observer'
import { increment } from '../../store/user'
import IcUserImage from '../../assets/man.png'
import AnimatedText from 'react-animated-text-content'

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
                                    <Text className="text-6xl text-orange-600 hover:scale-105">
                                        {/* <AnimatedText
                                            type="words" // animate words or chars
                                            animation={{
                                                x: '200px',
                                                y: '-20px',
                                                scale: 1.1,
                                                ease: 'ease-in-out',
                                            }}
                                            animationType="float"
                                            interval={0.06}
                                            duration={2}
                                            tag="p"
                                            className="animated-paragraph text-orange-600"
                                            includeWhiteSpaces
                                            threshold={0.1}
                                            rootMargin="20%"
                                        >
                                            {'Bhrugu Tundeliya'}
                                        </AnimatedText> */}
                                    </Text>
                                    <Text className="mt-2 text-2xl hover:scale-105 hover:text-orange-700">
                                        {/* <AnimatedText
                                            type="words" // animate words or chars
                                            animation={{
                                                x: '200px',
                                                y: '-20px',
                                                scale: 1.1,
                                                ease: 'ease-in-out',
                                            }}
                                            animationType="float"
                                            interval={0.06}
                                            duration={2.5}
                                            tag="label"
                                            className="animated-paragraph"
                                            includeWhiteSpaces
                                            threshold={0.1}
                                            rootMargin="20%"
                                        >
                                            {`React Developer (${Experience()} years)`}
                                        </AnimatedText> */}
                                    </Text>
                                    <Text className="text-2xl hover:scale-105">
                                        {/* <AnimatedText
                                            type="words" // animate words or chars
                                            animation={{
                                                x: '200px',
                                                y: '-20px',
                                                scale: 1.1,
                                                ease: 'ease-in-out',
                                            }}
                                            animationType="float"
                                            interval={0.06}
                                            duration={2.5}
                                            tag="label"
                                            className="animated-paragraph"
                                            includeWhiteSpaces
                                            threshold={0.1}
                                            rootMargin="20%"
                                        >
                                            {`React Native Developer (${Experience()} years)`}
                                        </AnimatedText> */}
                                    </Text>
                                    <Text className="text-base">
                                        {/* <AnimatedText
                                            type="words" // animate words or chars
                                            animation={{
                                                x: '200px',
                                                y: '-20px',
                                                scale: 1.1,
                                                ease: 'ease-in-out',
                                            }}
                                            animationType="float"
                                            interval={0.06}
                                            duration={2.5}
                                            tag="label"
                                            className="animated-paragraph text-slate-500"
                                            includeWhiteSpaces
                                            threshold={0.1}
                                            rootMargin="20%"
                                        >
                                            experience in various type of
                                            applications and websites
                                        </AnimatedText> */}
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
