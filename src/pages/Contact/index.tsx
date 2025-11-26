import React, { useState } from 'react'
import { Transition } from '@headlessui/react'
import { useInView } from 'react-intersection-observer'
import CV from '../../assets/doc/Bhrugu_Tundeliya_Resume.pdf'
import { ContactsData } from './constant'
import { Text } from '../../components'
import useAnalyticsEventTracker from '../../analytics'

const Contact = () => {
    const openInNewTab = (url: string) => {
        window.open(url, '_blank', 'noreferrer')
    }
    const gaEventTracker = useAnalyticsEventTracker('External Links')
    const [pageNumber, setPageNumber] = useState<number>(1)
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
        fallbackInView: true,
    })
    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setPageNumber(numPages)
    }
    return (
        <div className="flex h-full w-screen flex-col justify-center">
            <div ref={ref} />
            <Transition show={inView} appear={true}>
                <div className="grid h-full w-screen grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2">
                    <Transition.Child
                        className="mx-4 mb-5 flex flex-col"
                        enter="duration-700 delay-100 ease-out"
                        enterFrom="-translate-x-32 opacity-0"
                        enterTo="translate-x-0 opacity-100"
                    >
                        <div>
                            <Text className="pt-5 text-2xl text-slate-200 animate-fade-in-up">
                                Sites
                            </Text>
                            {ContactsData.map((i, k) => (
                                <div
                                    key={k + 'ContactsData'}
                                    className="mt-2 flex cursor-pointer items-center rounded-lg bg-orange-700 p-3 hw-accelerate shadow-lg shadow-slate-800/50 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/40"
                                    onClick={() => {
                                        gaEventTracker(i.link, i.name)
                                        openInNewTab(i.link)
                                    }}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            gaEventTracker(i.link, i.name)
                                            openInNewTab(i.link)
                                        }
                                    }}
                                    style={{
                                        animationDelay: `${(k + 1) * 100}ms`,
                                    }}
                                >
                                    <img
                                        src={i.icon}
                                        className="h-16 w-16 rounded-lg bg-orange-300 object-fill p-2 transition-transform duration-300 hover:rotate-6 hover:scale-110"
                                        alt={`${i.name} icon`}
                                    />
                                    <Text className="cursor-pointer pl-5 text-lg font-bold text-white">
                                        {i.name}
                                    </Text>
                                </div>
                            ))}
                            <Text className="my-5 text-2xl text-slate-200 animate-fade-in-up">
                                Contact Me
                            </Text>
                            <div className="grid h-16 grid-cols-1 gap-5 xl:grid-cols-2">
                                <a
                                    href="tel:+918460304001"
                                    className="flex h-full w-full items-center justify-center rounded-full bg-orange-700 py-3 hw-accelerate transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                    aria-label="Call or WhatsApp 8460304001"
                                >
                                    <Text className="cursor-pointer text-center text-lg font-bold text-blue-400">
                                        {'Call / WhatsApp '}
                                        <Text className="cursor-pointer font-bold text-white">
                                            {'8460304001'}
                                        </Text>
                                    </Text>
                                </a>
                                <a
                                    href="mailto:bhrugu1409@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-full w-full items-center justify-center rounded-full bg-orange-700 py-3 hw-accelerate transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                    aria-label="Send email to bhrugu1409@gmail.com"
                                >
                                    <Text className="cursor-pointer text-center text-lg font-bold text-blue-400">
                                        {'Email me: '}
                                        <Text className="cursor-pointer font-bold text-white">
                                            {'bhrugu1409@gmail.com'}
                                        </Text>
                                    </Text>
                                </a>
                            </div>
                        </div>
                    </Transition.Child>
                    <Transition.Child
                        className="mx-auto mt-5 flex h-full w-[95%] pt-5"
                        enter="duration-700 delay-300 ease-out"
                        enterFrom="translate-x-32 opacity-0"
                        enterTo="translate-x-0 opacity-100"
                    >
                        <embed
                            src={CV}
                            key={CV}
                            type="application/pdf"
                            height={'100%'}
                            width={'100%'}
                            className="rounded-lg shadow-2xl hw-accelerate"
                        />
                    </Transition.Child>
                </div>
            </Transition>
        </div>
    )
}

export default Contact
