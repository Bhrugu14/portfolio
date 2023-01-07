import { Transition } from '@headlessui/react'
import { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import { useInView } from 'react-intersection-observer'
import { Text } from '../../components'

const data = [
    {
        id: 1,
        name: 'Grocery Application',
        skills: ['React Native', 'Typescript', 'Redux'],
        points: [
            'Responsible for Design and development of User as well as Delivery partner Application',
            'Added family grouping functionality',
            'Integrated Promo-code based payment',
            'Integrated RazorPay for payment facilitation',
        ],
        isOpen: false,
    },
    {
        id: 1,
        name: 'Catalog Application',
        skills: ['Next.js', 'React', 'redux', 'React Native'],
        points: [
            'Worked with a team to develop a mobile application, storing and showing details of products',
            'Responsive with core ui components',
            'Incorporated zoom SDK for video call with customers',
            'developed a mobile-ready website with responsive UI.',
            'Integrated MirrAr web plug-in to view products on the go.',
        ],
        isOpen: false,
    },
    {
        id: 1,
        name: 'E-commerce sweets selling website',
        skills: ['Next.js', 'React', 'redux'],
        points: [
            'Worked with a team to develop a web and a mobile application for an e-commerce platform.',
            'List products with details (price and manufacture) for users to choose from.',
            'integrated different payment method handles gift card and personal message',
            'Responsible for bug fixes and adding new modules in the web',
        ],
        isOpen: false,
    },
    {
        id: 1,
        name: 'BLE Connector',
        skills: ['React Native'],
        points: [
            'Design and development of a BLE Mobile Application, reverse engineering a current webBLE product',
            'Integrated BLE-Manger package for connection',
            'Send and receive response of connected device',
            'Handled multiple events with log',
        ],
        isOpen: false,
    },
    {
        id: 1,
        name: 'Online Documents Storage',
        skills: ['React', 'Ionic'],
        points: [
            'Bug fixes and new modules and functionality.',
            'Created Android and iOS application from react code using ionic capacitor',
            'Handles permission and other challenges with that',
            'Used Global context for all file and folder',
            'Share with other user and share link integrated',
        ],
        isOpen: false,
    },
    {
        id: 1,
        name: 'Rewards-Driven Application',
        skills: ['React Native', 'Redux'],
        points: [
            'Independently developed Front end of mobile application that took care guiding visitors for best places to travel at a location',
            'Accommodated use of coupon validation and applying coupons on different sites of visit',
            'Designed a chatbot for facilitating users to have an instant reply from the system',
            'Added multilingual support with i18n package',
            'Migration from MobX to Redux',
            'The users of the system are end customers and vendors',
        ],
        isOpen: false,
    },
    {
        id: 1,
        name: 'Online Menu',
        skills: ['Next.js', 'React'],
        points: [
            'Responsible for design and development of full Application',
            'Dynamic Menu based on URL',
            'Meta Tags for each Products',
            'Handled Dynamic Categories and SubCategories',
        ],
        isOpen: false,
    },
]

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
                                    className={`flex h-52 flex-col content-center items-center justify-center rounded bg-orange-600 shadow-lg shadow-slate-700 hover:scale-105`}
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
