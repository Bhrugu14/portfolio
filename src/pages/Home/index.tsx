import { Transition } from '@headlessui/react'
import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import { Text } from '../../components'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { useInView } from 'react-intersection-observer'
import { increment } from '../../store/user'

const Home = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    })

    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()

    return (
        <div className="flex h-screen w-full flex-1 flex-col flex-col">
            <Text>Home</Text>
            <div className="flex flex-col">
                {/* Insert Your Item ! */}
                <Transition show={inView} appear={true}>
                    {/* <div className="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2"> */}
                    {[...Array(20)].map((i, k) => {
                        return (
                            <Transition.Child
                                enter="duration-1000 delay-100"
                                enterFrom="translate-y-32 opacity-0"
                                enterTo="translate-y-0 opacity-100"
                                leave="transition-opacity duration-150"
                                leaveFrom="translate-y-0 opacity-100"
                                leaveTo="translate-y-0 opacity-100"
                            >
                                <div
                                    style={{
                                        backgroundColor: 'red',
                                        height: '100px',
                                        margin: '10px',
                                    }}
                                >
                                    {k}
                                </div>
                            </Transition.Child>
                        )
                    })}
                    {/* </div> */}
                </Transition>
            </div>
            <div ref={ref} />
        </div>
    )
}

export default Home
