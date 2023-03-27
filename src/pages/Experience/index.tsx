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
        threshold: 0,
        triggerOnce: true,
        // fallbackInView: true,
    })

    return (
        <div id="projects" className="flex h-full w-full flex-1 flex-col p-5">
            <Transition className={'h-full w-full'} show={inView} appear={true}>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-4">
                    {ArrayData.map((i, k) => (
                        <Transition.Child
                            enter={`duration-${k * 500} delay-${k * 500}`}
                            enterFrom={`translate-y-${k * 32} opacity-0`}
                            enterTo="translate-y-0 opacity-100"
                            leave="transition-opacity duration-150"
                            leaveFrom="translate-y-0 opacity-100"
                            leaveTo="translate-y-0 opacity-100"
                        >
                            <ReactCardFlip
                                containerClassName="cursor-pointer relative"
                                isFlipped={i.isOpen}
                                flipDirection="horizontal"
                            >
                                <div
                                    className={`flex h-52 flex-col content-center items-center justify-center rounded bg-orange-600 px-2 shadow-lg shadow-slate-700 hover:scale-105`}
                                    onClick={() => {
                                        ArrayData[k].isOpen = true
                                        setData(ArrayData)
                                        setCount(count + 1)
                                    }}
                                >
                                    <Text className="cursor-pointer text-center text-xl font-black text-white no-underline decoration-1 antialiased">
                                        {i.name}
                                    </Text>
                                    <div className="text-base italic text-gray-200">
                                        {i.skills.map((j, l, arr) => (
                                            <Text
                                                className=" cursor-pointer text-center"
                                                key={l + 'skills'}
                                            >
                                                {j}
                                                {arr.length > l + 1 ? ', ' : ''}
                                            </Text>
                                        ))}
                                    </div>
                                </div>
                                <div
                                    className={`custom_scroll_bar min-h-52 cursor-pointer overflow-y-auto text-clip rounded bg-slate-700 px-5 py-2 md:h-52`}
                                    onClick={() => {
                                        ArrayData[k].isOpen = false
                                        setData(ArrayData)
                                        setCount(count + 1)
                                    }}
                                    onMouseLeave={() => {
                                        ArrayData[k].isOpen = false
                                        setData(ArrayData)
                                        setCount(count + 1)
                                    }}
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
            <div ref={exRef} />
        </div>
    )
}

export default Experience
