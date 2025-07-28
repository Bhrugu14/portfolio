import { Transition } from '@headlessui/react'
import { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import { useInView } from 'react-intersection-observer'
import { Text } from '../../components'
import { data } from './constant'

function Experience() {
    const [count, setCount] = useState(0)
    const [ArrayData, setData] = useState(data)
    const { ref: exRef, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    })

    const handleCardFlip = (index: number, isOpen: boolean) => {
        const newData = [...ArrayData]
        newData[index].isOpen = isOpen
        setData(newData)
        setCount(count + 1)
    }

    return (
        <div id="projects" className="flex h-full w-full flex-1 flex-col p-5">
            <div ref={exRef} />
            <Transition className={'h-full w-full'} show={inView} appear={true}>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
                    {ArrayData.map((i, k, arr) => (
                        <Transition.Child
                            key={'Project' + k}
                            enter={`transition transform duration-1000 ease-out`}
                            enterFrom={`scale-0 opacity-0`}
                            enterTo="scale-100 opacity-100"
                            style={{
                                transitionDelay: `${k * 100}ms`,
                            }}
                        >
                            <ReactCardFlip
                                containerClassName="cursor-pointer relative"
                                isFlipped={i.isOpen}
                                flipDirection="horizontal"
                            >
                                <div
                                    className={`flex h-52 flex-col content-center items-center justify-center rounded bg-orange-600 px-2 shadow-lg shadow-slate-700 transition-transform duration-300 hover:scale-105`}
                                    onClick={() => handleCardFlip(k, true)}
                                >
                                    <Text className="cursor-pointer text-center text-xl font-black text-white no-underline decoration-1 antialiased">
                                        {i.name}
                                    </Text>
                                    <div className="text-center text-base italic text-gray-200">
                                        {i.skills.map((j, l, arr) => (
                                            <Text
                                                className="cursor-pointer text-center"
                                                key={l + 'skills'}
                                            >
                                                {j}
                                                {arr.length > l + 1 ? ', ' : ''}
                                            </Text>
                                        ))}
                                    </div>
                                </div>
                                <div
                                    className={`custom_scroll_bar flex min-h-52 cursor-pointer flex-col overflow-y-auto text-clip rounded bg-slate-700 px-5 py-2 transition-all duration-300 md:h-52`}
                                    onClick={() => handleCardFlip(k, false)}
                                    onMouseLeave={() =>
                                        handleCardFlip(k, false)
                                    }
                                >
                                    <ul className="list-outside list-disc">
                                        {i.points.map((j, l, arr) => (
                                            <li key={l + 'skills'}>
                                                <Text className="cursor-pointer text-center text-base italic text-gray-200">
                                                    {j}
                                                </Text>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ReactCardFlip>
                        </Transition.Child>
                    ))}
                </div>
            </Transition>
        </div>
    )
}

export default Experience
